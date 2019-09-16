import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AppUser } from 'shared/models/app-user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<AppUser>

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState.pipe(

      map(user => {
        if (user != null) {
          return {
            'uid': user.uid,
            'displayName': user.displayName,
            'email': user.email,
            'isAdmin': false
          }
        }

        else {
          return null;
        }
      }));
  }

  loginG() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then
      (uc => {
        if (uc != null)
          return "OK";
        else
          return "NOK";
      });
  }
  logout() {
    return this.afAuth.auth.signOut();
  }

}
