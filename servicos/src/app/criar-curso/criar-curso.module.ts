import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService3 } from '../cursos3/cursos.serviceInjecaoDeDependencia';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CriarCursoComponent],
  // providers: [CursosService3],
})
export class CriarCursoModule { }
