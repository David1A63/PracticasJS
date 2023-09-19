// Hoisting
miFuncion1();
miFuncion2();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

// Función a utilizar en el callback
function imprimir(mensaje){
    console.log(mensaje);
}

// Función callback
function sumar(a1, b1, funcionCallback){
    let res = a1 + b1;
    funcionCallback(`Resultado: ${res}`);
}

// Utilizando la función callback
sumar(5, 3, imprimir);