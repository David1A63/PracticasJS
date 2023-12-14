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
}

let persona1 = new Persona('David', 'Domínguez');
persona1.nombre = 'Juan'; // set nombre('Juan')
console.log(persona1.nombre); // get nombre