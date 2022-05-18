import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(
    private http: HttpClient, // Creamos un cliente http para poder hacer las peticiones
    private db: AngularFirestore,
  ) {}

  getGames() {
    return this.db.collection('games').get().toPromise(); // Devuelvo una promesa
  
    // Esta funcion antigua descargaba un documento JSON de realtime database
    // return this.http.get(
    //   'https://webnad-f37af-default-rtdb.europe-west1.firebasedatabase.app/games.json'
    // );
  }
}
