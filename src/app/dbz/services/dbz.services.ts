import {  Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes : Personaje []= [
        { nombre : 'Vegeta', poder : 145000 },
        { nombre : 'Trunks' , poder: 232325 }
      ] ;

    get personajes(): Personaje[]{
        return [...this._personajes];
    }
    
    constructor(){ }

    agregarPersonaje(personaje : Personaje){
        this._personajes.push(personaje );
    }
}

 