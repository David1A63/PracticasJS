// Arreglo Actual
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);
//Recorriendo elementos de manera normal
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);
//For para recorrer el arreglo
for(let i = 0; i<autos.length; i++){
    console.log(i + " : " + autos[i] );
}
//Modificando un elemento dentro de un arreglo
autos[1] = 'Volkswagen';
console.log( autos[1] );
//Agregando nuevos valores al arreglo
autos.push('Audi');
console.log(autos);
console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos);