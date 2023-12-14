// Clase Padre
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

    // Función que se Sobreescribirá
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
}

// Clase Hija
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
    
    /* Sobreescritura
    Para sobreescribir una función es necesario que tenga el mismo nombre y reciba los
    mismos atributos, lo unico que sucedería es que se modifica su comportamiento o
    funcionamiento.
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
    }
    */

    // Sobreescritura - Reutilizando Código
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('David', 'Domínguez');
console.log(persona1);

let empleado1 = new Empleado('David', 'Dominguez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
// Aquí se muestra el resultado de heredar un metodo de la clase padre a la hija
console.log(empleado1.nombreCompleto());