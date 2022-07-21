import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IsAuthenticatedComponent } from './pages/directives/is-authenticated/is-authenticated.component';



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
