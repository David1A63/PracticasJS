// Paso por Valor en Js
// Psando Información de tipo primitivo(number, bool, string, etc...)
function cambiarValor(parametro){
    parametro = 20;
}

let argumento = 10;
/*
    Paso por valor:
    Solo se pasa una copia del valor de la variable argumento a la función cambiarValor(),
    Al ser una copia no afecta al valor de la variable original <<argumento>>.
*/
cambiarValor(argumento);
console.log(argumento);