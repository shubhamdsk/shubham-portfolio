import { Routes } from '@angular/router';
import { Shell } from '@layout/shell/shell';


export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        title: 'Shubham Deshmukh | Software Engineer',
        loadComponent: () =>
          import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        title: 'About | Shubham Deshmukh',
        loadComponent: () =>
          import('./features/about/about').then((m) => m.About),
      },
      {
        path: 'skills',
        title: 'Toolkit | Shubham Deshmukh',
        loadComponent: () =>
          import('./features/skills/skills').then((m) => m.Skills),
      },
      {
        path: 'experience',
        title: 'Experience | Shubham Deshmukh',
        loadComponent: () =>
          import('./features/experience/experience').then((m) => m.Experience),
      },
      {
        path: 'projects',
        title: 'Selected work | Shubham Deshmukh',
        loadComponent: () =>
          import('./features/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'contact',
        title: 'Contact | Shubham Deshmukh',
        loadComponent: () =>
          import('./features/contact/contact').then((m) => m.Contact),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];