// Matrices
// Declaración de una Matriz (Sintaxis Simplificada)
let matriz = [[100, 200, 300],[400, 500, 600]];

// No. Filas
console.log(matriz.length);
// No. Columnas
console.log(matriz[0].length);

// Filas
for(let i = 0; i<matriz.length; i++){
    // Columnas
    for(let j = 0; j<matriz[i].length; j++){
        // matriz[filas][columnas]
        console.log(`Elemento[${i}][${j}] = ${matriz[i][j]}`);
    }
}