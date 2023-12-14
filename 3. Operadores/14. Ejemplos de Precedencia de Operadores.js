let x = 5, y = 10, z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

// La multitpliación y división están en la misma jerarquía de operaciones
// Pero se realizan las operaciones de izquierda a derecha
// De la siguiente manera: 4 + ((5 * 6) / 3)
let resultado = 4 + 5 * 6 / 3;
console.log(resultado);

// Se realizan primero las operaciones dentro de los parentesis
resultado = (4 + 5) * 6 / 3;
console.log(resultado);