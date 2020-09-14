import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno = {
    id: 0,
    email: '',
    nome: ''
  };
  inscrisão: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunos: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscrisão = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunos.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscrisão.unsubscribe();
  }

  editarContato() {
    console.log('editar...');

    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
