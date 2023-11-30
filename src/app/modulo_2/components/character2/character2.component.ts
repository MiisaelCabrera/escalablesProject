import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character2 } from 'src/app/Interfaces/character2.interface';

@Component({
  selector: 'app-character2',
  templateUrl: './character2.component.html',
  styleUrls: ['./character2.component.css']
})
export class Character2Component {

  @Input()
  public character : Character2 ={
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }

  
  @Output()
  public onClickButton: EventEmitter<void> = new EventEmitter();
}
