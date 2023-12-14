class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }

    // Dentro de una clase no es necesario declarar function
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
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

let empleado1 = new Empleado('David', 'Dominguez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
// Aquí se muestra el resultado de heredar un metodo de la clase padre a la hija
console.log(empleado1.nombreCompleto());