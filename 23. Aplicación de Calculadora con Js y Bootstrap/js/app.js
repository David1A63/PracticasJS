function sumar(){
    const formulario = document.getElementById('formulario');
    let opA = formulario['operandoA'];
    let opB = formulario['operandoB'];
    let resultado = parseInt(opA.value) + parseInt(opB.value);
    if(isNaN(resultado)){
        resultado = 'No se han ingresado números';
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}