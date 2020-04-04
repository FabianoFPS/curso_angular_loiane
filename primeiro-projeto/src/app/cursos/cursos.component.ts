import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string [];

  constructor(private cursosServices: CursosService) { 

    this.nomePortal = "http://loiane.traning";

    // for (let index = 0; index < this.cursos.length; index++) {
    //   let curso = this.cursos[index];
    // }

    //let servico = new CursosService();

    this.cursos = cursosServices.getCursos();
  }

  ngOnInit(): void {
  }

}
