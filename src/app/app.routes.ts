import { Routes } from '@angular/router';
import { Shell } from '@layout/shell/shell';


export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        title: 'Shubham Deshmukh | Frontend Developer',
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
        title: 'Skills | Shubham Deshmukh',
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
        title: 'Projects | Shubham Deshmukh',
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