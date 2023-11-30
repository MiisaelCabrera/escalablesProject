import { Injectable } from "@angular/core";
import { Character2 } from "../Interfaces/character2.interface";

@Injectable({providedIn: "root"})
export class CharactersService {

  public characters2: Character2[] = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
    {
      "id": 6,
      "name": "Abadango Cluster Princess",
      "status": "Alive",
      "species": "Alien",
      "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    },
    {
      "id": 7,
      "name": "Abradolf Lincler",
      "status": "unknown",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    },
    {
      "id": 8,
      "name": "Adjudicator Rick",
      "status": "Dead",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    },
    {
      "id": 9,
      "name": "Agency Director",
      "status": "Dead",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    },
    {
      "id": 10,
      "name": "Alan Rails",
      "status": "Dead",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    },
    {
      "id": 11,
      "name": "Albert Einstein",
      "status": "Dead",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    },
    {
      "id": 12,
      "name": "Alexander",
      "status": "Dead",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
      "id": 13,
      "name": "Alien Googah",
      "status": "unknown",
      "species": "Alien",
      "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    },
    {
      "id": 14,
      "name": "Alien Morty",
      "status": "unknown",
      "species": "Alien",
      "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    },
    {
      "id": 15,
      "name": "Alien Rick",
      "status": "unknown",
      "species": "Alien",
      "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    },
    {
      "id": 16,
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    },
    {
      "id": 17,
      "name": "Annie",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
    },
    {
      "id": 18,
      "name": "Antenna Morty",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    },
    {
      "id": 19,
      "name": "Antenna Rick",
      "status": "unknown",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
    },
    {
      "id": 20,
      "name": "Ants in my Eyes Johnson",
      "status": "unknown",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
    }
  ]

  public ordenaDesc(): void {
    this.characters2 = this.characters2.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
      if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
      return 0;
    })
    for (let i = 0; i < this.characters2.length; i++) {
      this.characters2[i].id = i + 1;
    }
  }

  public deleteCharacter1(id: number): void {
  
      this.characters2.splice(id, 1);
      for (let i = 0; i < this.characters2.length; i++) {
        this.characters2[i].id = i + 1;
      }
    
  }

}