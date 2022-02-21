import { Injectable } from '@angular/core';
import { Game } from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }


  getGames() {
    // Llamada a la API

    let games = [
      {
        id: 1,
        name: 'Crosscode',
        finish: 'Acabado',
        platformPlayed: 'PC',
        year: 2019,
      },
      {
        id: 1,
        name: 'Crosscode',
        finish: 'Jugando',
        platformPlayed: 'PC',
        year: 2019,
      },
      {
        id: 1,
        name: 'Crosscode',
        finish: 'No terminado',
        platformPlayed: 'PC',
        year: 2019,
      },
      {
        id: 1,
        name: 'Crosscode',
        finish: 'Acabado',
        platformPlayed: 'PC',
        year: 2019,
      },
      {
        id: 1,
        name: 'Crosscode',
        finish: 'Jugando',
        platformPlayed: 'PC',
        year: 2019,
      },
      {
        id: 1,
        name: 'Crosscode',
        finish: 'No terminado',
        platformPlayed: 'PC',
        year: 2019,
      },
    ];
  
    return games;
  }
}


