import { Component, OnInit } from '@angular/core';
import { AlunosService, alunos } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: alunos[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
