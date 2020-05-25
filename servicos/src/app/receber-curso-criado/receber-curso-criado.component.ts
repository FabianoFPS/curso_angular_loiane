import { Component, OnInit } from '@angular/core';

import { CursosService3 } from '../cursos3/cursos.serviceInjecaoDeDependencia';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.scss']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private cursoService: CursosService3) { }

  ngOnInit(): void {

    this.cursoService.emitirEvento.subscribe(

      cursoCriado => this.curso = cursoCriado
    );
  }

}
