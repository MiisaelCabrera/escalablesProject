import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character2Component } from './components/character2/character2.component';
import { Characters2ListComponent } from './components/characters2-list/characters2-list.component';



@NgModule({
  declarations: [
    Character2Component,
    Characters2ListComponent
  ],
  exports: [
    Characters2ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Modulo2Module { }
