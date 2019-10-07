import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart.model';

@Component({
  selector: 'shipping-cart-summary',
  templateUrl: './shipping-cart-summary.component.html',
  styleUrls: ['./shipping-cart-summary.component.scss']
})
export class ShippingCartSummaryComponent implements OnInit {

  @Input('shopping-cart') cart: ShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
