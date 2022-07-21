import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ALERT } from '@ngxarch/commons';
import { Subject, switchMap, tap } from 'rxjs';
import { Alert, AlertService } from './alert.service';

@UntilDestroy()
@Component({
  selector: 'ngxarch-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ALERT,
      useExisting: AlertService,
    }
  ]
})
export class BasicComponent {

  public readonly showInactivityAlert = new Subject<void>();
  private readonly onInactivityAlertShown = this.showInactivityAlert.asObservable().pipe(
    switchMap(() => this._alertDelegate.alert({ 
      title: 'You where inactive',
      message: 'Due to your inactivity, you`ll be logged out in 10 seconds.' }, { id: 'signout-notification' })
  ));

  public constructor(@Inject(ALERT) private _alertDelegate: Alert) {
      this.onInactivityAlertShown.pipe(
        untilDestroyed(this)
      ).subscribe();
  }
}
