import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {}

  login({ email, password }: User) {

    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then( res => {
        this.router.navigate(["/"]);
      }).catch( err => {
        Swal.fire({
          title: 'Usuario o contraseña incorrecta',
          text: 'El usuario o la contraseña introducidos no coinciden, por favor revise los datos e intentelo de nuevo',
          icon: 'warning',
          confirmButtonColor: '#43BAF9',
        })
        
      })
  }

  loggedUser(){
        console.log(this.afAuth.currentUser);
    
  }
}
