import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';
// import { ContadorComponent } from './contador.component';
import { ContadorModule } from './heroes/contador/contador.module';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
 //   ContadorComponent, 
    HeroeComponent, ListadoComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    DbzModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//routing 

