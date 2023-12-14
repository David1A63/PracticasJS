let miFuncion = function(){
    console.log('Saludos desde mi función');
};

/*const miFuncionFlecha = () => {
    console.log('Saludos desde mi función flecha');
};*/

//const miFuncionFlecha = () => console.log('Saludos desde mi función flecha...');

// Las funciones flecha no se pueden utilizar antes de ser declaradas o aplicar Hoisting...
//miFuncionFlecha();

/*const saludar = () => {
    return 'Saludos desde mi función flecha';
};*/

// Función flecha simplificada
const saludar = () => 'saludos desde mi funcion flecha';

// Llamando a la función flecha simplificada
console.log(saludar());

// Objeto parecido a una función flecha
const regresaObjeto = () => ({
    nombre: 'David'
});

// Imprimiendo el objeto
console.log(regresaObjeto());

// Creando una función flecha con parametros
const funcionConParametros = (mensaje) => console.log(mensaje);

// Llamando a la función flecha con parametros...
funcionConParametros('Hola Mundo');

// const funcionConParam = (op1, op2) => op1 + op2;

const funcionConParam = (op1, op2) => {
    let resultado = op1 + op2;
    return `resultado: ${resultado}`
};

console.log(funcionConParam(3, 6));
