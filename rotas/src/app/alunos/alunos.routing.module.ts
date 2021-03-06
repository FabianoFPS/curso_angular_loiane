import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

const alunosRouts: Routes = [
  {path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard],
  children: [
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent },
    {
      path: ':id/editar',
      component: AlunoFormComponent,
      canDeactivate: [AlunosDeactivateGuard],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(alunosRouts)],
  exports: [RouterModule]
})

export class AlunosRoutingModule { }
