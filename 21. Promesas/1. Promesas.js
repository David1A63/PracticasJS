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
miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));