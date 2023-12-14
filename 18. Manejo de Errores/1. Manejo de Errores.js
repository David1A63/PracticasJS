'use strict'

try{
    // Lee el código que puede llegar tener errores
    let x = 10;
}catch(error){
    // Evita que el programa se detenga abruptamente y se devuelve la respuesta
    console.log(error);
}finally{
    // Esta linea siempre se ejecutará
    console.log('Finaliza la revisión del código...');
}

console.log('continuamos...');
