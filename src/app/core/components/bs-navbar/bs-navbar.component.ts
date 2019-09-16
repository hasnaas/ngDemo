import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {

  currentUser: AppUser;

  constructor(private authService: AuthService,
    private router: Router) {
    this.authService.user.subscribe(u => {
      this.currentUser = u;
      console.log(this.currentUser);
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
