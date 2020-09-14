import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute,
    private cursoService: CursoService,
    private rota: Router) {
    // console.log(this.route);
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((parans: any) =>{
      this.id = parans['id'];

      this.curso = this.cursoService.getCurso(parans['id']);

      if(this.curso == null){
        this.rota.navigate(['cursos/naoEncontrado', this.id]);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
