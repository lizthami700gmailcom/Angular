import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.services';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports : [
      MainPageComponent
  ],
  imports: [
    CommonModule, FormsModule, MatButtonModule, MatFormFieldModule
  ], 
  providers : [
    DbzService
  ]
})
export class DbzModule { }
