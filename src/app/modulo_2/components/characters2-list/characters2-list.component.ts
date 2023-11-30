import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character2 } from 'src/app/Interfaces/character2.interface';


@Component({
  selector: 'app-characters2-list',
  templateUrl: './characters2-list.component.html',
  styleUrls: ['./characters2-list.component.css']
})
export class Characters2ListComponent {
  @Input()
  characters: Character2[] = [];
  elementToDelete = 0;

  @Output()
  public onClickButton: EventEmitter<number> = new EventEmitter();
  
  @Output()
  public onClickButton2: EventEmitter<void> = new EventEmitter();
  public getId(id: number): void
  {
    this.elementToDelete = id;
    this.onClickButton.emit(this.elementToDelete-1);
  }

}
