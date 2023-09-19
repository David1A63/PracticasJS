//Ejemplos de tipos de datos
//Tipo de dato String
var nombre = "David";
console.log(typeof(nombre));

//TypeOf
nombre = 10;
console.log(typeof(nombre));

//Tipo de dato númerico
var numero = 1000;
console.log(typeof(numero));

//Tipo de dato object
var objeto = {
    nombre  : "David",
    apellido : "Dominguez",
    telefono : "7711616816"
}
console.log(typeof(objeto));

//Tipo de dato Booleano
var booleano = false;
console.log(typeof(booleano));

//Las Funciones tambien son un tipo de dato
function miFuncion(){
    console.log(typeof(miFuncion));
};

//Tipo de dato Symbol
var simbolo = Symbol("Mi Simbolo");
console.log(typeof(simbolo));

//Tipo de dato clase
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof(Persona));

//Tipo undefined
var x;
//o
//var x = undefined;
console.log(typeof(x));

//Tipo null
var y = null;
console.log(typeof(y));

//Los arrays son tipo object
var auto = ['bmw', 'vw', 'volvo'];
console.log(auto);
console.log(typeof(auto));

//Empty String es un String
var z = '';
console.log(z)
console.log(typeof(z));