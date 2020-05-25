import { Injectable } from '@angular/core';

@Injectable()
export class CursosService2 {

    constructor() { 

        console.log('CursosService2');
    }

    getCursos(): string[]{

        return ['Angular9', 'Java', 'PHP', 'C++'];
    }
}