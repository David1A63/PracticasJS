class Ingreso extends Dato{
    static contadorIngresos = 0;
    
    constructor(descripcion, valor){
        //Obteniendo los datos de la clase padre...
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    
    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }
}