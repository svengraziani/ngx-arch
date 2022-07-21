import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgxaIsAuthenticatedDirective,
} from '@ngxarch/commons';
import {
  CodeExampleComponent,
  EXAMPLE_FOLDER_URL,
  COMPONENT_PROVIDER,
} from '@ngxarch/code-example';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentLoader } from './component-loader';
import { BasicComponent } from './examples/is-authenticated/basic/basic.component';
import { ButtonModule } from '@anglify/components';
import { AppRoutingModule } from './app-routing.module';
import { IsAuthenticatedComponent } from './pages/directives/is-authenticated/is-authenticated.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    BasicComponent,
    IsAuthenticatedComponent,
  ],
  imports: [
    BrowserModule,
    NgxaIsAuthenticatedDirective,
    CodeExampleComponent,
    ButtonModule,
    HighlightModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: EXAMPLE_FOLDER_URL,
      useValue:
        'https://raw.githubusercontent.com/svengraziani/ngx-arch/main/apps/docs/src/app/examples/',
    },
    {
      provide: COMPONENT_PROVIDER,
      useClass: ComponentLoader,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
