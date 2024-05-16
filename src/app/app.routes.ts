import { Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    loadChildren: () => import('./components/home/home.routes'),
    ...canActivate(() => redirectUnauthorizedTo(['/iniciar-sesion'])),
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
    ...canActivate(() => redirectLoggedInTo(['/home'])),
  },
  {
    path: 'registrar',
    loadComponent: () =>
      import('./components/registro/registro.component').then(
        (m) => m.RegistroComponent
      ),
    ...canActivate(() => redirectLoggedInTo(['/home'])),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home' /* Cambiarlo por un componente Error */,
  },
];
