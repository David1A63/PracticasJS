// Tipos Primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}

// Paso por valor
cambiarValor(x);
console.log(x);
console.log(a);

// Explicación
// al referenciar a x en el console.log solo se imprime el valor inicial de x
// por lo cual no funciona el cambio de valor en la variable al reasignarla a la variable a