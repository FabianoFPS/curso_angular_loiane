import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  isCollapsed = true;
  opcoesAba : string[] = ['Home', 'Features', 'Pricing'];
  aba: string = this.opcoesAba[1];

  constructor() { }

  ngOnInit(): void {
  }

}
