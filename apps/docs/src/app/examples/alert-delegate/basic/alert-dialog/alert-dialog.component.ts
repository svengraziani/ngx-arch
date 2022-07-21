import { DialogContext, DIALOG_CONTEXT } from '@anglify/components';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AlertPayload } from '../alert.service';

@Component({
  selector: 'ngxarch-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertDialogComponent {

  public constructor(
    @Inject(DIALOG_CONTEXT) public readonly context: DialogContext<AlertPayload>
  ) {}

}
