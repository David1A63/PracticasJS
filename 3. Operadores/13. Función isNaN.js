let miNumero = "19";

// NaN (Not a Number)
let edad = Number(miNumero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un número");
}else{
    let oper = (edad >= 18) ? "La persona ya puede votar" : "La persona no puede votar";
    console.log(oper);
}