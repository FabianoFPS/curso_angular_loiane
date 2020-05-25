import { Component, OnInit } from '@angular/core';

import { CursosService3 } from './cursos.serviceInjecaoDeDependencia';

@Component({
  selector: 'app-cursos3',
  templateUrl: './cursos-injecao-de-dependencias.component.html',
  styleUrls: ['./cursos-injecao-de-dependencias.component.scss'],
  providers: [CursosService3],
})
export class Cursos3Component implements OnInit {

  cursos: string[] = [];
  // cursosServices: CursosService;

  constructor(private cursosServices: CursosService3) {

    // this.cursosServices = _cursosServices;
  }

  ngOnInit(): void {

    this.cursos = this.cursosServices.getCursos();
    CursosService3.criouNovoCurso.subscribe(

      curso => this.cursos.push(curso)

      // versão arrowfunction acima
      // function(curso){
      //   console.log(curso);
      // }
    );
  }

}
