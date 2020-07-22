import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livros: any = {
    titulo: "Código Limpo: Habilidades Práticas do Agile Software",
    dataLancamento: new Date(2016, 5, 23),
    Editora: "Alta Books",
    Idioma: "Português",
    ISBN: "8576082675",
    Dimensoes: "23,9 x 17 x 2,3 cm",
    Peso: "721 g",
    Avaliacoes: 4.65269741,
    maisvendidos: 1.769,
    preco: 228.64
  };
  
  listaLivros: string [] = ["Java", "Angular9"];

  filtro: string = '';

  valorAsync = new Promise( (resolve, reject) => {

    setTimeout(() => resolve('Valor Assíncrono')
      , 2000);
  } );

  valorAsync2 = interval(2000).pipe(map( valor => 'Valor Assíncrono2'));

  constructor() { 

  }

  ngOnInit(): void {
  }

  addCurso(valor){

    this.listaLivros.push(valor);
    console.log(this.listaLivros);
  }

  obterCursos(){

    if (this.listaLivros.length === 0 
      || this.filtro === undefined
      || this.filtro.trim() === '') {
      
        return this.listaLivros;
    }

    return this.listaLivros.filter( (v) => {

      if( v.toLowerCase().indexOf( this.filtro.toLowerCase() ) >= 0 ){
        return true;
      }
      return false;
    } );

  }
}
