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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde el método estatico');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
    
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('David', 'Domínguez');
console.log(persona1.toString());

let empleado1 = new Empleado('David', 'Dominguez', 'Sistemas');
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

// persona1.saludar(); No es posible llamar un metodo statico desde un objeto
// Solo se llama desde la clase pero no desde un Objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);