// Clase Padre
// Al no indicar que clase se extiende en la nueva clase por defecto se aplica
// extends Object
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

    // Sobreescribiendo la clase padre (Object)
    toString(){
        // Aplicando Polimorfismo (Múltiples formas en tiempo de ejecución)
        // El metodo que se ejecuta depende si la referencia es de tipo padre o hijo
        return this.nombreCompleto();
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
    
    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

/*
    El Polimorfismo (en POO) es la capacidad que tienen ciertos lenguajes para hacer que,
    al enviar el mismo mensaje (o, en otras palabras, invocar al mismo método) desde
    distintos objetos, cada uno de esos objetos pueda responder a ese mensaje
    (o a esa invocación) de forma distinta.
*/

/*
    Como se observa en el siguiente ejemplo se llama al metodo toString()
    pero se comporta de manera diferente en cada objeto.
*/

let persona1 = new Persona('David', 'Domínguez');
console.log(persona1.toString());

let empleado1 = new Empleado('David', 'Dominguez', 'Sistemas');
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());