import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
@Injectable()
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Angular 9"];
  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(){

    this.mostrarCursos = !this.mostrarCursos;
  }
}
