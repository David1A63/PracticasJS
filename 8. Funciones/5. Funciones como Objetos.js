//Declarando la función
function miFuncion(a, b){
    //Mostrar cuantos elementos recibe la función
    // La función arguments solo se puede usar dentro de la función
    console.log(arguments.length);
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

// Funciones Self Invoking
// No se puede reutilizar y solo se ejecuta una vez
(function(a, b){
    console.log('Ejecutando la función: ' + (a+b));
})(3, 4);

// Funciones como objetos
console.log(typeof miFuncion);
// Asignando la función como texto
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

