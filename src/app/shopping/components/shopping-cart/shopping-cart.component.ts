import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<ShoppingCart>;
  ObjectKeys = Object.keys;

  constructor(private shoppingCart: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCart.getCart();
  }

  clearCart() {
    this.shoppingCart.removeCart();
  }

}
