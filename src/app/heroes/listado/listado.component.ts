import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
   heroes : string[] = ['Spiderman','Iroman','Hulk','Thor']; 
   herroeBorrado : string = '';

   borrarHeroe(){
    this.herroeBorrado = this.heroes.shift() || '';
   }

  }

