import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRouts: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent},
  { path: 'naoEncontrado/:id', component: CursoNaoEncontradoComponent }
];
    
@NgModule({
  imports: [RouterModule.forChild(cursosRouts)],
  exports: [RouterModule]
})

export class CursosRoutingModule {}