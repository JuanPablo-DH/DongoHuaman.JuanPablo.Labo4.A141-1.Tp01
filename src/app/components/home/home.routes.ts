import { Route } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'info-usuario',
    pathMatch: 'full',
  },
  {
    path: 'quien-soy',
    loadComponent: () =>
      import('./quiensoy/quiensoy.component').then((m) => m.QuiensoyComponent),
  },
  {
    path: 'info-usuario',
    loadComponent: () =>
      import('./info-usuario/info-usuario.component').then(
        (m) => m.InfoUsuarioComponent
      ),
  },
  {
    path: 'juego-uno',
    loadComponent: () =>
      import('./juego-uno/juego-uno.component').then(
        (m) => m.JuegoUnoComponent
      ),
  },
  {
    path: 'juego-dos',
    loadComponent: () =>
      import('./juego-dos/juego-dos.component').then(
        (m) => m.JuegoDosComponent
      ),
  },
  {
    path: 'juego-tres',
    loadComponent: () =>
      import('./juego-tres/juego-tres.component').then(
        (m) => m.JuegoTresComponent
      ),
  },
  {
    path: 'juego-cuatro',
    loadComponent: () =>
      import('./juego-cuatro/juego-cuatro.component').then(
        (m) => m.JuegoCuatroComponent
      ),
  },
] as Route[];
