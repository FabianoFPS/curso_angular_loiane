import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string [] = ["Java", 'EXT js', `Angula`];

  constructor() { 

    this.nomePortal = "http://loiane.traning";

    for (let index = 0; index < this.cursos.length; index++) {
      let curso = this.cursos[index];
      
    }
  }

  ngOnInit(): void {
  }

}
