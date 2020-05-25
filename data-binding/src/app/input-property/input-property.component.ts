import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['entradaDeDadosUm:entrada', 'entradaDeDadosDois']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = '';
  @Input() nomeCurso2: string = '';

  entradaDeDadosUm: string = '';
  entradaDeDadosDois: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
