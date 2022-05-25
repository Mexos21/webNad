import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadGameService {
  private link = '';

  constructor(
    private http: HttpClient, // Creamos un cliente http para poder hacer las peticiones
    private db: AngularFirestore
  ) {}

  // const db = getDatabase();

  public uploadGame(
    name: string,
    state: string,
    platform: string,
    year: number,
    image: string
  ) {
    return this.uploadImage(image)
      .then((data) => {
        this.db.collection('games').doc().set({
          name: name,
          state: state,
          platform: platform,
          year: year,
          image: data.link,
        });
      })
      .catch((err) => {
        if (err.message == 'Error al subir la imagen') {
          throw err;
        } else {
          let err = new Error();
          err.message = 'Error al subir los datos';
          throw err;
        }
      });
  }

  private uploadImage(image: string) {
    // Funcion para subir la imagen a imgur

    var headers = new Headers();
    headers.append('Authorization', 'Client-ID 6fd6c585c4398cd');

    var imageData = image.replace(/^data:image\/[a-z]+;base64,/, ''); // Quitamos el formato de la imagen (data:image/png;base64,) y dejamos solo los datos

    var formData = new FormData();
    formData.append('image', imageData);

    return fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: headers,
      body: formData,
      redirect: 'follow',
    })
      .then((res) => res.text()) // Saco el texto de la respuesta en formato string
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        let err = new Error();
        err.message = 'Error al subir la imagen';
        throw err;
      });
  }
}
