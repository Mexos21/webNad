import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/services/games-service.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games;

  constructor(
    private gamesService: GamesService
  ) {
    this.games = this.gamesService.getGames();
  }

  ngOnInit(): void {

  }
}
