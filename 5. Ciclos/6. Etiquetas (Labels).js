// Etiquetas
// Las etiquetas pueden servir para ejecutar o marcar una sección de código.
inicio:

for(let contador = 0; contador<=10; contador++){
    if(contador%2 !== 0){
        continue inicio; // Ir a la siguiente Iteración
    }
    console.log(contador);
}