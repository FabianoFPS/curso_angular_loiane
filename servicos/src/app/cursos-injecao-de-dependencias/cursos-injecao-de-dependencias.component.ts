import { Component, OnInit } from '@angular/core';

import { CursosService2 } from './cursos.serviceInjecaoDeDependencia';

@Component({
  selector: 'app-cursos-injecao-de-dependencias',
  templateUrl: './cursos-injecao-de-dependencias.component.html',
  styleUrls: ['./cursos-injecao-de-dependencias.component.scss']
})
export class CursosInjecaoDeDependenciasComponent implements OnInit {

  cursos: string[] = [];
  // cursosServices: CursosService;

  constructor(private cursosServices: CursosService2) {

    // this.cursosServices = _cursosServices;
  }

  ngOnInit(): void {

    this.cursos = this.cursosServices.getCursos();
  }

}
