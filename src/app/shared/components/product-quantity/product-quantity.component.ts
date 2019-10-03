import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item.model';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {

  @Input('shopping-item') sci: ShoppingCartItem;

  constructor(private shoppingService: ShoppingCartService) { }

  addOne() {
    this.shoppingService.updateItem(this.sci, +1)
  }
  removeOne() {
    this.shoppingService.updateItem(this.sci, -1)
  }
  ngOnInit() {
  }

}
