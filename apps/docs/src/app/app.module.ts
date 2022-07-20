import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxaIsAuthenticatedDirective, NGXA_IS_AUTHENTICATED } from '@ngxarch/commons';
import { CodeExampleComponent, EXAMPLE_FOLDER_URL, COMPONENT_PROVIDER} from  '@ngxarch/code-example';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentLoader } from './component-loader';
import { BasicComponent } from './examples/is-authenticated/basic/basic.component';
import { ButtonModule} from '@anglify/components';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, BasicComponent],
  imports: [BrowserModule, NgxaIsAuthenticatedDirective, CodeExampleComponent, ButtonModule],
  providers: [
    {
      provide: EXAMPLE_FOLDER_URL,
      useValue: 'https://raw.githubusercontent.com/svengraziani/ngx-arch/main/apps/docs/src/app/examples/'
    },
    {
      provide: COMPONENT_PROVIDER,
      useClass: ComponentLoader
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
