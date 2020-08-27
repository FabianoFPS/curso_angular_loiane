import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
    //console.log(this.route);
    this.inscricao = this.route.queryParams.subscribe( (queryParans: any) => {
      (typeof queryParans['pagina'] === "undefined")?
        this.pagina = 1:
          this.pagina = queryParans['pagina'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximapagina(){
    // this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {pagina: ++this.pagina}});
  }
}
