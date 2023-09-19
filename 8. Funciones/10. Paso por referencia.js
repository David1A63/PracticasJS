// Tipos Primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}

// Paso por valor
cambiarValor(x);
console.log(x);
//console.log(a);

// Paso por referencia
// Creando un Objeto
const persona = {
    nombre: 'David',
    apellido: 'Domínguez'
}

function cambiarValorObj(p1){
    p1.nombre = 'Armando';
    p1.apellido = 'Reyes';
}

cambiarValorObj(persona);

console.log(persona);

