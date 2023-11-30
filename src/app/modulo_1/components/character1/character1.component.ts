import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character1 } from 'src/app/Interfaces/character1.interface';

@Component({
  selector: 'app-character1',
  templateUrl: './character1.component.html',
  styleUrls: ['./character1.component.css']
})
export class Character1Component {

  @Input()
  public character : Character1 = {
    "title": "Spongebob Squarepants",
    "year": 1999,
    "episodes": 272,
    "img": "https://mx.web.img2.acsta.net/r_1280_720/pictures/20/04/28/06/34/0334746.jpg",
    "id": 1
  }

  @Output()
  public onClickButton: EventEmitter<void> = new EventEmitter();

}
