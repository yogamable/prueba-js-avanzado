import { Animal } from "./clasePadreAnimal.js";

export class Leon extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido);
    }

    rugido(){
        return this._sonido;
    } 
}

export class Lobo extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido);
    }
    
    aullido(){
        return this.sonido;
    } 
}

export class Oso extends Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido);
    }

    grunido(){
        return this._sonido;
    } 
}

export class Serpiente extends Animal {
    constructor (nombre,edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido);
    }
    
    siseo(){
        return this._sonido;
    } 
}

export class Aguila extends Animal {
    constructor (nombre,edad, img, comentarios, sonido){
        super (nombre, edad, img, comentarios, sonido);
    }
    
    chillido(){
        return this._sonido;
    }
}