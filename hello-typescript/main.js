var minhaVar = 'Minha variavel';
var stringcrase = "Ola " + minhaVar;
function minhaFunc(x, y) {
    return x + y;
}
//es6-features.org
//https://babeljs.io/
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 3; });
numeros.map(function (valor) {
    var num = valor * 4;
    return num / 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.some = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'fghjkl';
/* Erro de tipo
var n1: string = "asjlaksjg";
n1 = 7;
*/
//Não tipados
var n3 = 'uiop';
n3 = 99;
