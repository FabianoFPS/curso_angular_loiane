import { Injectable, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService3 {

    emitirEvento = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular9', 'Java', 'PHP', 'C++'];

    constructor(private logService: LogService) { 

        logService.consoleLog('CursosService3');
    }

    getCursos(): string[]{

        return this.cursos;
    }

    addCurso(curso: string){

        this.cursos.push(curso);
        this.emitirEvento.emit(curso);
        CursosService3.criouNovoCurso.emit(curso);
    }
}