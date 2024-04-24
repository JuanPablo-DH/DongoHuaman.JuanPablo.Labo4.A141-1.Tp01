import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () => import("./components/home/home.component").then((m) => m.HomeComponent),
    loadChildren: () => import('./components/home/home.routes')
  },
  {
    path: "login",
    loadComponent: () => import("./components/login/login.component").then((m) => m.LoginComponent)
  },
  {
    path: "registro",
    loadComponent: () => import("./components/registro/registro.component").then((m) => m.RegistroComponent)
  },
  {
    path: "quiensoy",
    loadComponent: () => import("./components/quiensoy/quiensoy.component").then((m) => m.QuiensoyComponent)
  },
  {
    path: "", 
    pathMatch: 'full',
    redirectTo: 'login' 
  },
  {
    path: "**",
    pathMatch: 'full',
    redirectTo: 'login' /* Cambiarlo por un componente Error */
  }
];
