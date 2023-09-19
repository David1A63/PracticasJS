let sumar = function(a, b){
    //Retorna el valor de a
    console.log(arguments[0]);
    //Retorna el valor de b
    console.log(arguments[1]);
    return a + b;
};

resultado = sumar(4, 3)
console.log(resultado);