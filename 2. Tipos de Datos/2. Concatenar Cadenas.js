var nombre = "David";
var apellido = "Domínguez";
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//Aqui concatena directamente los numeros al estar separados
var x = nombre + 1 + 2 + 3;
console.log(x);

//Aqui se concatena el nombre y la suma de los dos números dentro del parentésis
x = nombre + (2 + 5);
console.log(x);

//Al primero leer números se realiza la operacion y despues se concatena la cadena
x = 2 + 6 + x;
console.log(x);