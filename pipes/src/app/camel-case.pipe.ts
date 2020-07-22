import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: string[]): string {

    let values = value.split(' ');
    let resultado = '';

    // for (let v of values){

    //   resultado += this.capitalize(v) + ' ';
    // }

    resultado = values.reduce(this.capitalizeReduce, '');

    // return resultado.substr(0, resultado.length -1);
    return resultado.trim();
  }

  capitalizeReduce(frase: string, palavra: string): string{

    return frase + palavra.substr(0,1).toUpperCase() + palavra.substr(1).toLowerCase() + ' ';
  }

  capitalize(value: string): string{

    return  value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
