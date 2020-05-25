import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService3 } from './cursos.serviceInjecaoDeDependencia';
import { Cursos3Component } from './cursos3.component';

@NgModule({
  declarations: [
    Cursos3Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [Cursos3Component],
  // providers: [CursosService3],
})
export class Curso3Module { }
