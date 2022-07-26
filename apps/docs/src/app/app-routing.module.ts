import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmDelegateComponent } from './pages/delegates/confirm-delegate/confirm-delegate.component';
import { AlertDelegateComponent } from './pages/delegates/alert-delegate/alert-delegate.component';
import { InstallationComponent } from './pages/installation/installation.component';
import { LogDelegateComponent } from './pages/delegates/log-delegate/log-delegate.component';
import { PromptDelegateComponent } from './pages/delegates/prompt-delegate/prompt-delegate.component';
import { ProcessComponent } from './pages/patterns/process/process.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        loadComponent: () =>
          import('./layouts/default/default.component').then(
            (m) => m.DefaultComponent
          ),
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'getting-started/installation',
          },
          {
            path: 'confirm-delegate',
            component: ConfirmDelegateComponent,
          },
          {
            path: 'alert-delegate',
            component: AlertDelegateComponent,
          },
          {
            path: 'log-delegate',
            component: LogDelegateComponent,
          },
          {
            path: 'prompt-delegate',
            component: PromptDelegateComponent,
          },
          {
            path: 'getting-started/installation',
            component: InstallationComponent,
          },
          {
            path: 'patterns/process',
            component: ProcessComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
