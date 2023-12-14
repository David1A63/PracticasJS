let numero = 2, texto = 'Valor desconocido';

// Si no se asigna un break no se ejecutará el siguiente caso
switch(numero){
    case 1:
        texto = 'Número 1';
        break;
    case 2:
        texto = 'Número 2';
        break;
    case 3:
        texto = 'Número 3';
        break;
    case 4:
        texto = 'Número 4';
        break;
    // Aquí no es necesario agregar un brake ya que esta al final
    // Pero si se asigna al principio si será necesario agregarlo
    default:
        texto = 'Caso no Encontrado';
}

console.log(texto);