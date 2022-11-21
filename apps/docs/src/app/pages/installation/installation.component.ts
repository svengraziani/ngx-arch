import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngxarch-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallationComponent {
  public angularInstallation = `$ npm install -g @angular/cli\n$ ng new my-app\n$ cd my-app`;
  public archInstallation = `$ npm install @ngxarch/commons`;
}
