var minhaVar = 'Minha variavel';
var stringcrase = `Ola ${minhaVar}`;

function minhaFunc(x,y){

    return x+y;
}

//es6-features.org
//https://babeljs.io/
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];

numeros.map(function(valor){
    return valor * 2;
});

numeros.map( valor => valor * 3);

numeros.map ((valor) => {

    var num = valor * 4;

    return num/2;
});

class Matematica{

    some(x, y){
        return x + y;
    }
}

var n1 = 'fghjkl';
/* Erro de tipo
var n1: string = "asjlaksjg";
n1 = 7;
*/

//Não tipados

var n3: any = 'uiop';
n3 = 99;