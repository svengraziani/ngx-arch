import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IsAuthenticatedComponent } from './pages/directives/is-authenticated/is-authenticated.component';
import { ConfirmDelegateComponent } from './pages/delegates/confirm-delegate/confirm-delegate.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        loadComponent: () => import('./layouts/default/default.component').then(m => m.DefaultComponent),
        children: [
          {
            path: 'is-authenticated',
            component: IsAuthenticatedComponent
          },
          {
            path: 'confirm-delegate',
            component: ConfirmDelegateComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
