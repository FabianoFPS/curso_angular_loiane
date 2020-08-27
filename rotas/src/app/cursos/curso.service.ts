import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ];
  }
  
  getCurso(id: number){
    return this.getCursos().find(value => value.id == id );
    
    // return this.getCursos().filter(value => value.id == id )[0];
    
    // const curso = this.getCursos().filter(value => value.id == id );

    // console.log(curso[0]);
    // return curso[0];

    // let cursos = this.getCursos();
    // for (const iterator of cursos) {
    //   if(iterator.id == id){
    //     return iterator;
    //   }
    // }
    // let cursos = this.getCursos();
    // for (let i=0; i<cursos.length; i++) {
    //   let curso = cursos[i];
    //   if(curso.id == id){
    //     return curso;
    //   }
    // }
    // return null;
  }
}
