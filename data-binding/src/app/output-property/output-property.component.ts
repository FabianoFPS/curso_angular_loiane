import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  outputs: ["outraFormaDeDeclararOutput"]
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  // @ViewChild('campoInput') campoValorInput: HTMLElement;
  @ViewChild('campoInput') campoValorInput: ElementRef;

  //No @Component({...outputs: ['outraFormaDeDeclararOutput']...})
  outraFormaDeDeclararOutput = new EventEmitter(); 

  incrementa(){

    console.log(`@ViewChild('campoInput') campoValorInput: ElementRef; ${this.campoValorInput.nativeElement.value}`);

    //this.valor++;

    this.campoValorInput.nativeElement.value++;

    this.mudouValor.emit({
      novoValor: this.valor,
      acao: "Incrementa"
    });
  }

  decrementa(){

    this.valor--;
    this.mudouValor.emit({
      novoValor: this.valor,
      acao: "Decrementa"
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
