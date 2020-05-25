import { Component, OnInit } from '@angular/core';

import { CursosService3 } from '../cursos3/cursos.serviceInjecaoDeDependencia';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursosService3],
})
export class CriarCursoComponent implements OnInit {

  cursos: string[];

  constructor(private cursoService: CursosService3) { }

  ngOnInit(): void {

    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string){

    this.cursoService.addCurso(curso);
  }
}
