let miFuncion = function(){
    console.log('Saludos desde mi función');
};

const miFuncionFlecha = () => {
    console.log('Saludos desde mi función flecha');
};

// Las funciones flecha no se pueden utilizar antes de ser declaradas o aplicar Hoisting...
miFuncionFlecha();

