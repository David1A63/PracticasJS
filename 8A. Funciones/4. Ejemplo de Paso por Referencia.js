// Paso por Referencia
// Objetos (array) se pasan por referencia
function cambiarValor(parametro){
    parametro[0] = 20;
}

// Cada objeto tiene una dirección de memoria asociada
let arreglo = [10];
console.log(`Antes de llamar a la función: ${arreglo[0]}`);
// Se envía el arreglo
cambiarValor(arreglo);
// AL apuntar a la misma referencia de memoria se realiza el cambio en el valor de las variables
console.log(`Despues de llamar a la función: ${arreglo[0]}`);