import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngxarch-alert-delegate',
  templateUrl: './alert-delegate.component.html',
  styleUrls: ['./alert-delegate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDelegateComponent {}
