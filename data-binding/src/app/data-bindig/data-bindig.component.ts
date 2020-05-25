import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindig',
  templateUrl: './data-bindig.component.html',
  //styleUrls: ['./data-bindig.component.css']
  styles: [
    `
    .highligth{
      background-color: yellowgreen;
      font-weight: bold;
    }
    `
  ]
})
export class DataBindigComponent implements OnInit {

  url: string = 'http://loiane.training/curso/angular/';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/';
  valorAtual: string = "";
  valorSalvo: string = '';
  valorSalvo2: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';
  pessoa: any = {
    nome: "Fabiano",
    idade: 35,
    endereco: {
      rua: "Goias",
      numero: "250",
      bairro: "Rincão Gaúcho",
      UF: "RS"
    }
  }
  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  onMouseOverOut(){

    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }

  salvarValor2(event){

    this.valorSalvo2 = event;
    console.log(`salvarValor: ${this.valorSalvo2}`);
  }

  salvarValor(event){

    this.valorSalvo = event;
    console.log(`salvarValor: ${this.valorSalvo}`);
  }

  onKeyUp(event: KeyboardEvent){
    
    console.log(event);
    console.log(event.key);
    console.log((<HTMLInputElement>event.target).value);

    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  getTexto(){

    return "Texto obtido pelo metodo getTexto, component data-binding";
  }

  getValor(){

    return 1;
  }

  getCurtirCurso(){

    return true;
  }
  
  onMudouValor(evento){

    console.log(`Ação: ${evento.acao}, Valor atual: ${evento.novoValor}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
