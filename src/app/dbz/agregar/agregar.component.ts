import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo : Personaje ={
    nombre: '',
    poder : 0
  }
  /* @Output() = Emitir eventos, como los datos son GENERICOS se debe especificar el tipo  d datos 
            en este caso por eso se coloco <Personaje>  */
 // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter(); 

  constructor(private dbzService : DbzService){}

  agregar(){
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }
  //  console.log(this.nuevo);
 //   this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = { 
      nombre : '', 
      poder : 0
    }
  }

}
