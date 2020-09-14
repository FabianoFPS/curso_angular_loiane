import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// import { ModuleWithProviders, Component } from '@angular/core';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRouts: Routes = [
  // { path: 'cursos', loadChildren: './cursos/curso.module#CursosModule' }, //Depreciado
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/curso.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'customers', loadChildren: () => import('./Schematics/customers/customers.module').then(m => m.CustomersModule) },
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

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
