import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppUser } from 'shared/models/app-user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) {

  }

  save(user: AppUser) {
    this.db.object("/users/" + user.uid).update(user);
  }

  fetch(uid: string) {

    return this.db.object<AppUser>("/users/" + uid).valueChanges();

  }
}
