//Declarando la función
function miFuncion(a, b){
    return a + b;
}

// Llamar a la función
let resultado = miFuncion(1, 5);
console.log(resultado);

// Declaración de función de tipo expresión
let x = function(a, b){ return a + b; }
// Utilizando la función de tipo expresión
resultado = x(4, 5);
console.log(resultado);
