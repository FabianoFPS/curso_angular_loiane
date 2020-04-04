import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig',
  templateUrl: './data-bindig.component.html',
  styleUrls: ['./data-bindig.component.css']
})
export class DataBindigComponent implements OnInit {

  url: string = 'http://loiane.training/curso/angular/';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/';

  getTexto(){

    return "Texto obtido pelo metodo getTexto, component data-binding";
  }

  getValor(){

    return 1;
  }

  getCurtirCurso(){

    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
