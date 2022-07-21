import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngxarch-is-authenticated',
  templateUrl: './is-authenticated.component.html',
  styleUrls: ['./is-authenticated.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IsAuthenticatedComponent {
  public readonly tokens = `
  NGXA_IS_AUTHENTICATED: Observable<boolean>
  `;
  public readonly properties = `TemplateRef<any> //  Template to render instead of the truthy state.`; 
}
