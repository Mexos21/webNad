import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadGameService {
  constructor(
    private http: HttpClient, // Creamos un cliente http para poder hacer las peticiones
    private db: AngularFirestore
  ) {}

  // const db = getDatabase();

  uploadGame(
    name: string,
    state: string,
    platform: string,
    year: number,
    image: any
  ) {
    this.db.collection('games').doc().set({
      name: name,
      state: state,
      platform: platform,
      year: year,
    });

    this.uploadImage(image).then((res) => {
      console.log(res);
    });
  }

  private async uploadImage(image: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${environment.imgurPublicId}`,
      }),
    };

    let formData = new FormData();
    formData.append('image', image);

    const imageData = await this.http
      .post(environment.imgurUploadLink, formData, { headers: httpOptions.headers })
      .toPromise();

    return this.http.post(
      `${environment.imgurUploadLink}`,
      formData,
      httpOptions
    );
  }
}
