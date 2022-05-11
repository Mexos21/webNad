import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/services/games-service.service';
import swal from 'sweetalert2'; // Sweet alert para los popups con mensajes
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: any;

  constructor(
    private gamesService: GamesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.gamesService
      .getGames()
      .toPromise()
      .then((res) => {
        this.games = res;
        this.spinner.hide();
      })
      .catch((err) => {
        this.openErrorDialog();
        this.spinner.hide();
      });
  }

  openErrorDialog() {
    // En caso de que ocurra algun error muestro un popup con un mensaje de error al obtener la lista de juegos de la API
    swal.fire({
      title: 'Error',
      text: 'Error al cargar la lista de juegos',
      icon: 'warning',
      confirmButtonText: 'Recargar',
      confirmButtonColor: '#43BAF9',
    }).then(function() {
      location.reload(); // Cuando se pulse el boton "Recargar" se recarga la pagina
    });
  }
}
