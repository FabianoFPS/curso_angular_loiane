import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export type alunos = {id: number, nome: string, email: string};

export class AlunosService {

  private alunos: alunos[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@provedor'},
    {id: 2, nome: 'Biguasy', email: 'sauron@provedor'},
    {id: 3, nome: 'Aluno 03', email: 'albuquerqte@provedor'},
    {id: 4, nome: 'Miramar', email: 'loremgrey@provedor'},
    {id: 5, nome: 'Aluno 05', email: 'aluno05@provedor'},
  ];

  getAlunos(): alunos[]{
    return this.alunos;
  }

  getAluno(id: number){
    return this.getAlunos().find(value => value.id == id );
  }

  constructor() { }
}
