import { Injectable } from "@angular/core";
import { Character1 } from "../Interfaces/character1.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class CartoonsService {

    public characters: Character1[] = [];

    constructor(private http : HttpClient){

    }

    fetchCartoonsFromApi(searchTerm : string, order : string): Observable <any> {

      return this.http.get(`http://localhost:8081/api/characters?searchTerm=${searchTerm}&order=${order}`);

    }

    createCartoon(cartoon : Character1): Observable <any> {

      return this.http.post("http://localhost:8081/api/characters",cartoon);
      
    }
    
    public deleteCartoon(id: number): Observable <any> {

      return this.http.delete(`http://localhost:8081/api/characters/${id}`);

    }

    public modifyCartoon(id: number, chartoon:Character1): Observable <any> {

      return this.http.put(`http://localhost:8081/api/characters/${id}`,chartoon);

    }
    

}