import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AppUser } from 'shared/models/app-user.model';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>

  constructor(private afAuth: AngularFireAuth,
    private userService: UserService) {
    this.user = this.afAuth.authState.pipe(

      map(user => {
        if (user != null) {
          return {
            'uid': user.uid,
            'displayName': user.displayName,
            'email': user.email,
            'isAdmin': true
          }
        }

        else {
          return null;
        }
      }));
  }

  get appUser$(): Observable<AppUser> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user)
          return this.userService.fetch(user.uid);
        else
          return of(null);
      }
      ));
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
