import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngxarch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'docs';
}
