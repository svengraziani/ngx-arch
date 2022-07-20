import { ChangeDetectionStrategy, Component} from '@angular/core';
import { NGXA_IS_AUTHENTICATED } from '@ngxarch/commons';
import { FakeAuthService } from './fake-auth-service';

@Component({
  selector: 'ngxarch-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [
    {
      provide: FakeAuthService,
    },
    // usually you would define this on module level and substitue the NGXA_IS_AUTHENTICATED token
    // directly with a TokenFactory but for demo purposes we define it here
    {
      provide: NGXA_IS_AUTHENTICATED,
      useFactory: (authService: FakeAuthService) => {
          return authService.isAuthenticated$;
      },
      deps: [FakeAuthService]
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent{
  public constructor(public readonly authService: FakeAuthService) {}

}
