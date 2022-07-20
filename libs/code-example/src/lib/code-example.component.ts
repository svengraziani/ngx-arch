import { ChangeDetectionStrategy, Component, Inject, InjectionToken, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {HighlightModule} from 'ngx-highlightjs';
import { catchError, combineLatest, map, merge, NEVER, Observable, scan, tap, shareReplay, startWith, Subject, switchMap } from 'rxjs';
import {UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ButtonModule, IconModule} from '@anglify/components';

export const EXAMPLE_FOLDER_URL = new InjectionToken<string>('EXAMPLE_FOLDER_URL');
export type CodeExampleView = 'code' | 'template' | 'style' | null;

export interface ComponentProvider {
  loadComponent(component: string, example: string): Observable<{default: Type<unknown>}>;
}

export const COMPONENT_PROVIDER = new InjectionToken<ComponentProvider>('CODE_EXAMPLE_COMPONENT_LOADER');

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'ngxarch-code-example',
  template: `
<div class="preview">
  <ng-container #container></ng-container>
</div>
<div class="code-container">
  <div class="template" *ngIf="templateIsSelected | async">
    <pre *ngIf="templateCode | async as template">
      <code [highlight]="template" [languages]="['xml']"></code>
    </pre>
  </div>
  <div class="code" *ngIf="codeIsSelected | async">
    <pre *ngIf="componentCode | async as code">
      <code [highlight]="code" [languages]="['typescript']"></code>
    </pre>
  </div>
  <div class="style" *ngIf="styleIsSelected | async">
    <pre *ngIf="styleCode | async as style">
      <code [highlight]="style" [languages]="['scss']"></code>
    </pre>
  </div>
</div>
<div class="controls">
  <button
    *ngIf="templateCode | async"
    anglifyButton
    appearance="icon"
    (click)="selectView.next('template')"
    aria-label="HTML template of the example"
  >
    <anglify-icon icon="mdi-xml"></anglify-icon>
  </button>
  <button *ngIf="componentCode| async" anglifyButton appearance="icon" (click)="selectView.next('code')" aria-label="Typescript code of the example">
    <anglify-icon icon="mdi-language-typescript"></anglify-icon>
  </button>
  <button *ngIf="styleCode | async" anglifyButton appearance="icon" (click)="selectView.next('style')" aria-label="Styles of the example">
    <anglify-icon icon="mdi-language-css3"></anglify-icon>
  </button>


</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./code-example.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule,
    ButtonModule,
    IconModule
  ],
})
export class CodeExampleComponent {

  @ViewChild('container', { static: true, read: ViewContainerRef }) public set container(viewContainer: ViewContainerRef) {
    this._registerViewContainer.next(viewContainer);
  }

  private readonly _selectComponent = new Subject<string>();
  private readonly _selectExample = new Subject<string>();
  private readonly _registerViewContainer = new Subject<ViewContainerRef>();

  @Input() public set component(value: string) {
    this._selectComponent.next(value);
  }

  @Input() public set example(value: string) {
    this._selectExample.next(value);
  }

  public readonly selectView = new Subject<CodeExampleView>();

  public readonly _selectedView = this.selectView.asObservable().pipe(
    startWith(null),
    scan((selectedView: CodeExampleView, newView: CodeExampleView) => {
      if(selectedView === newView) {
        return null;
      }
      return newView;
    }),
    shareReplay({refCount: true, bufferSize: 1})
  );

  public readonly _viewContainerRegistered = this._registerViewContainer.asObservable().pipe(shareReplay({refCount: true, bufferSize: 1}));
  
  public readonly _selectedComponent = this._selectComponent.asObservable().pipe(shareReplay({refCount: true, bufferSize: 1}));
  public readonly _selectedExample = this._selectExample.asObservable().pipe(shareReplay({refCount: true, bufferSize: 1}));

  public readonly templateIsSelected = this._selectedView.pipe(map(view => view === 'template'));
  public readonly codeIsSelected = this._selectedView.pipe(map(view => view === 'code'));
  public readonly styleIsSelected = this._selectedView.pipe(map(view => view === 'style'));

  private readonly _selection = combineLatest({
    component: this._selectedComponent,
    example: this._selectedExample
  }).pipe(
    shareReplay({refCount: true, bufferSize: 1})
  );

  public readonly templateCode = this._selection.pipe(
    switchMap(({component, example}) => 
    this._httpClient.get(`${this._exampleFolderUrl}/${component}/${example}/${example}.component.html`, {responseType: 'text'})
    .pipe(
      catchError(() => NEVER)
    )),
    shareReplay({refCount: true, bufferSize: 1})
  );

  public readonly styleCode = this._selection.pipe(
    switchMap(({component, example}) => 
    this._httpClient.get(`${this._exampleFolderUrl}/${component}/${example}/${example}.component.scss`, {responseType: 'text'})
    .pipe(
      catchError(() => NEVER)
    )),
    shareReplay({refCount: true, bufferSize: 1})
  );

  public readonly componentCode = this._selection.pipe(
    switchMap(({component, example}) => 
    this._httpClient.get(`${this._exampleFolderUrl}/${component}/${example}/${example}.component.ts`, {responseType: 'text'})
    .pipe(
      catchError(() => NEVER)
    )),
    shareReplay({refCount: true, bufferSize: 1})
  );

  public constructor(
    @Inject(EXAMPLE_FOLDER_URL) private readonly _exampleFolderUrl: string,
    @Inject(COMPONENT_PROVIDER) private readonly _componentLoader: ComponentProvider,
    private readonly _httpClient: HttpClient
    ) {
      merge(this._selectedComponent, this._selectedExample, this._viewContainerRegistered.pipe(
        switchMap(viewContainer => this._selection.pipe(
          switchMap(({component, example}) => this._componentLoader.loadComponent(component, example)),
          tap(component => {
            Object.keys(component.default).forEach(key => {
              const x = component.default as unknown as Record<string, Type<unknown>>;
              viewContainer.createComponent(x[key]);
            })
          }),
        ))
      ))
      .pipe(untilDestroyed(this)).subscribe();
    }
  
}
