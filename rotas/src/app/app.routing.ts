import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTS: Routes = [

  // { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // {
  //   path: 'cursos',
  //   component: CursosComponent
  // },
  // {
  //   path: 'cursos/:id',
  //   component: CursoDetalheComponent
  // },
  // {
  //   path: 'naoEncontrado/:id',
  //   component: CursoNaoEncontradoComponent
  // }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTS);
