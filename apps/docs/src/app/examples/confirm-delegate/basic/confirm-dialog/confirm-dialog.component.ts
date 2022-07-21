import { Component, Inject } from '@angular/core';
import { DIALOG_CONTEXT, DialogContext } from '@anglify/components';
import { ConfirmPayload } from '../confirm.service';

@Component({
  selector: 'ngxarch-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent{
  public constructor(
    @Inject(DIALOG_CONTEXT) public readonly context: DialogContext<ConfirmPayload>
  ) {}
}
