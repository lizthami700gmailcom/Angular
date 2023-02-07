import { ViewportScroller } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector : 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre : string = 'Iroman'; 
    edad   : number = 45

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return this.nombre; 
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }


    cambiarEdad(): void {
        this.edad = 35;
    }
}