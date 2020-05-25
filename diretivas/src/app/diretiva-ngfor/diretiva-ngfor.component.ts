import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursosObservable;
  cursosObservable2;
  listaCursos : string[];

  cursos : string[] = ["Angular 2", "Angular 9", "java", "phonegap"];

  constructor() { }

  ngOnInit(): void {

    this.listaCursos = this.cursos;


    this.cursosObservable = interval(2000)
    .subscribe( v => ['Angular', 'Java'] );

    // interval(2000)
    // .map( v => ['Angular', 'Java'])
    // .subscribe( v => this.listaCursos = v);
    
  }

}
