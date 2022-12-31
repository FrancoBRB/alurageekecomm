import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable()
export class LoginService {
  constructor(private router: Router) {}

  token: string = '';
  isLogedIn:boolean = false;

  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((token) => {
            this.token = token;
            this.isLogedIn = true;
            this.router.navigate(['/']);
          });
      });
  }

  getIdToken() {
    return this.token;
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';
        this.isLogedIn = false;
        this.router.navigate(['/']);
      });
  }
}
