// Cadenas y Funciones
// Cadenas Inmutables (No se puede modificar su valor)
// Las cadenas de caracteres son tipos primitivos
function cambiarValor(parametro){
    parametro = 'adios';
}

// Llamamos a la función
let argumento = 'Hola';
console.log(`Antes de llamar a la función: ${argumento}`);
cambiarValor(argumento);
console.log(`Después de llamar a la función: ${argumento}`);