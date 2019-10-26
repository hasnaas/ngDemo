import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUser } from 'shared/models/app-user.model';
import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {


  currentUser$: Observable<AppUser>;
  shoppingCart$: Observable<ShoppingCart>;
  public isCollapsed = false;

  constructor(private authService: AuthService,
    private router: Router,
    private shoppingService: ShoppingCartService) {
  }

  logout() {
    this.router.navigate([""]);
    this.authService.logout();
  }

  async ngOnInit() {
    this.currentUser$ = await this.authService.appUser$;
    this.shoppingCart$ = await this.shoppingService.getCart();
  }

}
