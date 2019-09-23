import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  currentUser$: Observable<AppUser>;

  constructor(private authService: AuthService,
    private router: Router) {
    this.authService.user.subscribe(u => {
      this.currentUser$ = this.authService.appUser$;
      //console.log(this.currentUser);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate([""]);
    })
  }
  ngOnInit() {

  }

}
