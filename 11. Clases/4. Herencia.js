// Al crear clases no se aplica Hoisting (Primero debe crearse la clase)
// No es posible crear objetos antes de crear la clase
// let persona2 = new Persona('María', 'Alejandra');

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    
    // Permite modificar el atributo nombre
    set nombre(nombre){
        this._nombre = nombre;
    }

    // Permite acceder al atributo nombre
    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }
}

// La clase empleado extiende la clase persona
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        // Este elemento super permite enviar datos a la clase padre para que permita la construcción
        // de la clase hija
        super(nombre, apellido); //Llamar a la clase padre
        this._departamento = departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
}

let persona1 = new Persona('David', 'Domínguez');
console.log(persona1);

// Es necesario proporcionar los datos de la clase padre en un super
let empleado1 = new Empleado('David', 'Dominguez', 'Sistemas');
console.log(empleado1);
// Aquí se heredan los metodos de la clase padre
console.log(empleado1.nombre);