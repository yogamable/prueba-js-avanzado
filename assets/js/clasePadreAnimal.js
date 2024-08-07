export class Animal {
    constructor (nombre, img, sonido){
        this._nombre = nombre;
        this._edad = "";
        this._img = img;
        this._comentarios = "";
        this._sonido = sonido;
    }
    
    getNombre (){
        return this._nombre;
    }

    getEdad () {
        return this._edad;
    }

    getImg (){
        return this._img;
    }

    setComentarios (nuevoComentario){
        this._comentarios = nuevoComentario;
    }

    getSonido (){
        return this._sonido;
    }      
};