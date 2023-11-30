import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Character1 } from 'src/app/Interfaces/character1.interface';
import { CartoonsService } from 'src/app/services/cartoons.service';

@Component({
  selector: 'app-characters1-list',
  templateUrl: './characters1-list.component.html',
  styleUrls: ['./characters1-list.component.css']
})
export class Characters1ListComponent {
  public searchTerm: string = "";
  public order: string = "";
  public newTitle: string = "";
  public newYear: number = 0;
  public newEpisodes: number = 0;
  public newImg: string = "";
  public newId: number = 0;

  public newTitleEdited: string = "";
  public newYearEdited: number = 0;
  public newEpisodesEdited: number = 0;
  public newImgEdited: string = "";
  public idToEdit: number = 0;

  constructor(private cartoonsService: CartoonsService){
  this.searchCartoons();
}

public get characters(): Character1[]{
  return this.cartoonsService.characters;
}


  public getId(id: number): void
  {
    this.deleteCartoon(id);
  }

  public modifyCartoon(): void
  {
    const cartoon :  Character1 =  {
      title:this.newTitleEdited,
      year: this.newYearEdited,
      episodes: this.newEpisodesEdited,
      img: this.newImgEdited,
      id: this.idToEdit
    }
    this.cartoonsService.modifyCartoon(this.idToEdit,cartoon).subscribe({
      next: () => {
        this.searchCartoons();
      },
      error: (error: any) => {
        console.log(error);
      }
    });

  }

  public searchByTerm() : void
  {
    this.searchCartoons();
  }

  public orderItems(order: string = "") : void
  {
    this.order = order;
    this.searchCartoons();
  }

  public createCartoon(): void{
    const cartoon :  Character1 =  {
      title:this.newTitle,
      year: this.newYear,
      episodes: this.newEpisodes,
      img: this.newImg,
      id: this.newId
    }
    this.cartoonsService.createCartoon(cartoon).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public deleteCartoon(id : number): void{
    
    this.cartoonsService.deleteCartoon(id).subscribe({
      next: () => {
        this.searchCartoons();
      },
      error: (error: any) => {
        console.log(error);
      }
    });

  }

  private searchCartoons() : void{
    this.cartoonsService.fetchCartoonsFromApi(this.searchTerm, this.order).subscribe({
      next:(response : any) =>{
        this.cartoonsService.characters = response.charactersList;
      },
      error:(error: any) =>{
        console.log(error);
      }
    })

  }

  
}
