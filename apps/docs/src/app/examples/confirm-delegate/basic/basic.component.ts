import { Component, Inject } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CONFIRM } from '@ngxarch/commons';
import { Subject, switchMap, tap } from 'rxjs';
import { Confirm, ConfirmService } from './confirm.service';

@UntilDestroy()
@Component({
  selector: 'ngxarch-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [
    {
      provide: CONFIRM,
      useExisting: ConfirmService,
    }
  ]
})
export class BasicComponent {

  public readonly proceedToCheckout = new Subject<void>();
  private readonly onProceedToCheckout = this.proceedToCheckout.asObservable().pipe(
    switchMap(() => this._confirmDelegate.confirm({ message: 'Are you sure you want to proceed?' }, { id: 'checkout' }).pipe(
      tap(response => {
        if(response.confirmed) {
          alert(`Proceeding to checkout.`);
        }else {
          alert(`Can't proceed to checkout, user denied confirmation.`);
        }
      }
    ))
  ));

  public constructor(
    @Inject(CONFIRM) private readonly _confirmDelegate: Confirm,
  ) { 
    this.onProceedToCheckout.pipe(untilDestroyed(this)).subscribe();
  }
  
}
