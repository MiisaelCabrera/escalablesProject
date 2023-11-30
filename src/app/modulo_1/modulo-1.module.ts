import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character1Component } from './components/character1/character1.component';
import { Characters1ListComponent } from './components/characters1-list/characters1-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Character1Component,
    Characters1ListComponent
  ],
  exports: [
    Character1Component,
    Characters1ListComponent
  ],
  imports: [
    
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class Modulo1Module { 

}
