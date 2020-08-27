import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit, OnDestroy{

  private inscricao: Subscription;
  id: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((parans: any) =>{
      this.id = parans['id'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
