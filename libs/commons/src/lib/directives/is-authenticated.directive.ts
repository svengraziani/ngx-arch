import { Directive, Inject, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, OperatorFunction, Subject, takeUntil, tap } from 'rxjs';
import { NGXA_IS_AUTHENTICATED } from '../tokens/ngxa-is-authenticated';

@Directive({
  selector: '[ngxaIsAuthenticated]',
  standalone: true,
})
export class NgxaIsAuthenticatedDirective implements OnInit, OnDestroy {

  @Input('ngxaIsAuthenticated') public else!: TemplateRef<unknown>;

  private readonly _destroy = new Subject<void>;
  private readonly _onDestroy = this._destroy.asObservable();
  public constructor(
    @Inject(NGXA_IS_AUTHENTICATED) private readonly _isAuthenticated: Observable<boolean>,
    private readonly _templateRef: TemplateRef<unknown>,
    private readonly _viewContainerRef: ViewContainerRef
  ) {
    this._viewContainerRef.clear()
  }

  private _mapAuthenticationToView(): OperatorFunction<boolean, boolean> {
    return tap(isAuthenticated => {
      if (isAuthenticated) {
        this._viewContainerRef.clear()
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      } else {
        this._viewContainerRef.clear();
        if(this.else){
          this._viewContainerRef.createEmbeddedView(this.else);
        }
      }
    })
  }

  public ngOnInit(){
    this._isAuthenticated.
    pipe(
      takeUntil(this._onDestroy),
      this._mapAuthenticationToView()
    ).subscribe();
  }

  public ngOnDestroy(){
      this._destroy.complete();
      this._destroy.unsubscribe();
  }


}
