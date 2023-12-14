// Declarando las variables...
let a = 3, b = 2,  c = 1, d = 4;
// las operaciones van de izquierda a derecha
let z = a * b + c / d;
// Resultado de la operación
console.log(z);
// las operaciones en Js siguen la jerarquía de operaciones
z = c + a * b / d;
// Si se asignan parentesis encerrando un termino esta operación se realizará primero
console.log(z);