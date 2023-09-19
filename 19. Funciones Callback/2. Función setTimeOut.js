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

// Llamadas asincronas con uso de setTimeOut
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3s');
}

// Ejecutar despues de 3s
setTimeout(miFuncionCallback, 3000);
// Otra forma de usar setTimeOut
setTimeout(function(){ console.log('Saludo asincrono 2, 4s')}, 4000);
// setTimeOut con Funciones flecha
setTimeout(() => console.log('Saludo asíncrono 3, 5s'), 5000);