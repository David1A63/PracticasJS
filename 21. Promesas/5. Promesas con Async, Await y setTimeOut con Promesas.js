let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        //Definiendo la promesa
        resolver('Resolvió Correctamente');
    }else{
        rechazar('Se produjo un error');
    }
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('Inicio Promesa');
    setTimeout( () => resolver('Saludos con promesa y timeout'), 3000);
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));
// async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    });

    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

// Promesas, Await, Async y TimeOut
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('Promesa con await y timeOut'), 3000);
    });
    console.log(await miPromesa);
    console.log('fin de la función');
}

funcionConPromesaAwaitTimeout();