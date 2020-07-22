import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const APP_ROUTS: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'cursos/:id',
      component: CursosComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTS);