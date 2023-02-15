import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

  @Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html'
    
  })
  export class MainPageComponent {
  [x: string]: any;

  nuevo : Personaje = {
    nombre : 'Maestro Roshi',
    poder : 1000
  }

  agregarNuevoPersonaje (argumento : Personaje){
  // this.personajes.push(argumento);
  }

}
