import { Component } from '@angular/core';
import { Character2 } from '../Interfaces/character2.interface';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
})
export class CharactersComponent {

  public onOrdenaDesc(): void {
    this.charactersService.ordenaDesc();
  }

  public onDeleteCharacter1(id: number): void {
    this.charactersService.deleteCharacter1(id);
    
  }
  
  constructor(private charactersService:CharactersService) { }
  
  public get characters2(): Character2[] {
    return this.charactersService.characters2;
  }
}
