// Asignando el resultado a la función sin especificar la cantidad de argumentos
let resultado = sumarTodo(5, 4, 3, 6, 7 , 9);

// Función sumar todo
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i<arguments.length; i++){
        suma += arguments[i]; //suma = suma + arguments[i];
    }
    return suma;
}

// Imprimiendo el Resultado
console.log(resultado);