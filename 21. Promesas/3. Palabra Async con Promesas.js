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

miFuncionConPromesa().then(valor => console.log(valor));