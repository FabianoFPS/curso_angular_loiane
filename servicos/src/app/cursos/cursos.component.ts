import { LogService } from './../shared/log.service';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosServices: CursosService;

  constructor() {

    this.cursosServices = new CursosService();
  }

  ngOnInit(): void {

    this.cursos = this.cursosServices.getCursos();
  }

}
