import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private http: HttpClient // Creamos un cliente http para poder hacer las peticiones
  ) { }


  getGames() {
    return this.http.get('https://webnad-f37af-default-rtdb.europe-west1.firebasedatabase.app/games.json');
  }
}


