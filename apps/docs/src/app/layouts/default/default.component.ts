import { BreakpointObserverService, ButtonModule, DialogModule, IconModule, ListModule, NavigationDrawerModule, ToolbarModule, TooltipModule } from '@anglify/components';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'ngxarch-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    IconModule,
    NavigationDrawerModule,
    ListModule,
    RouterModule,
    TooltipModule,
  ]
})
export class DefaultComponent {


  public gettingStarted = [
    { link: 'getting-started/installation', name: 'Installation' },
    { link: 'getting-started/application-layouts', name: 'Application Layouts' },
    { link: 'getting-started/release-notes', name: 'Release notes' },
  ];

  public features = [
    { link: 'features/theming', name: 'Theming' },
    { link: 'features/icon-fonts', name: 'Icon Fonts' },
    { link: 'features/breakpoints', name: 'Breakpoints' },
  ];


  public delegates = [
    {
      link: 'confirm-delegate',
      name: 'Confirm',
    },
  ];


  public directives = [
    {
      link: 'is-authenticated',
      name: 'isAuthenticated',
    },
  ];

  public initTheme() {
    const theme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (theme) {
      this.setTheme(theme);
    } else {
      this.setTheme('light');
    }
  }

  public setTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }

  public toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      this.setTheme('light');
    } else {
      this.setTheme('dark');
    }
  }

  public openGithubRepo() {
    window.open('https://github.com/svengraziani/ngx-arch', '_blank')?.focus();
  }

  public constructor(public readonly router: Router, public breakpointService: BreakpointObserverService) {
    this.initTheme();
  }

}
