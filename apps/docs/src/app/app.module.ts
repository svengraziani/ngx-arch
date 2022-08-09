import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxaIsAuthenticatedDirective } from '@ngxarch/commons';
import {
  CodeExampleComponent,
  EXAMPLE_FOLDER_URL,
  COMPONENT_PROVIDER,
} from '@ngxarch/code-example';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentLoader } from './component-loader';
import { BasicComponent as ExampleIsAuthenticatedComponent } from './examples/is-authenticated/basic/basic.component';
import { BasicComponent as ExampleConfirmDelegateComponent } from './examples/confirm-delegate/basic/basic.component';
import { BasicComponent as ExampleAlertDelegateComponent } from './examples/alert-delegate/basic/basic.component';
import { BasicComponent as ExampleLogDelegeComponent } from './examples/log-delegate/basic/basic.component';

import { ButtonModule, DialogModule, IconModule, SnackbarModule } from '@anglify/components';
import { AppRoutingModule } from './app-routing.module';
import { IsAuthenticatedComponent } from './pages/directives/is-authenticated/is-authenticated.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ConfirmDelegateComponent } from './pages/delegates/confirm-delegate/confirm-delegate.component';
import { ConfirmDialogComponent } from './examples/confirm-delegate/basic/confirm-dialog/confirm-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { AlertDialogComponent } from './examples/alert-delegate/basic/alert-dialog/alert-dialog.component';
import { AlertDelegateComponent } from './pages/delegates/alert-delegate/alert-delegate.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { LogDelegateComponent } from './pages/delegates/log-delegate/log-delegate.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ExampleIsAuthenticatedComponent,
    ExampleConfirmDelegateComponent,
    ExampleAlertDelegateComponent,
    ConfirmDelegateComponent,
    IsAuthenticatedComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    AlertDelegateComponent,
    InstallationComponent,
    LogDelegateComponent,
    ExampleLogDelegeComponent,
  ],
  imports: [
    BrowserModule,
    NgxaIsAuthenticatedDirective,
    CodeExampleComponent,
    ButtonModule,
    HighlightModule,
    AppRoutingModule,
    DialogModule,
    OverlayModule,
    IconModule,
    NoopAnimationsModule,
    SnackbarModule
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
