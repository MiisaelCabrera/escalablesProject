import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Modulo1Module } from './modulo_1/modulo-1.module';
import { Modulo2Module } from './modulo_2/modulo-2.module';
import { DatosComponent } from './components/datos/datos.component';
import { CartoonsComponent } from './modulo_1/cartoons.page';
import { CharactersComponent } from './modulo_2/characters.page';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    CartoonsComponent,
    CharactersComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    Modulo1Module,
    Modulo2Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
