class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Lo primero que hace al llamar la clase es crear el constructor de la clase
// Para ello es necesario proporcionar los atributos correspondientes
let persona1 = new Persona('David', 'Domínguez');
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);