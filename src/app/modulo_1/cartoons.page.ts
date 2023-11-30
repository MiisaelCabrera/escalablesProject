import { Component } from '@angular/core';
import { Character1 } from '../Interfaces/character1.interface';
import { CartoonsService } from '../services/cartoons.service';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.page.html',
})
export class CartoonsComponent {

  constructor(private cartoonsService:CartoonsService) { }
  
  public get characters(): Character1[] {
    return this.cartoonsService.characters;
  }

  

}
