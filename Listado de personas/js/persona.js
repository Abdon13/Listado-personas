class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this.apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apelido(){
        return this._apelido;
    }
    set apelido(apelido){
        this._apelido = apelido;
    }
}