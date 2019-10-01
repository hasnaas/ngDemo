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
    this.sci.quantity = this.sci.quantity + 1;
    let key = this.sci.key;
    let newItem = {};
    newItem[key] = this.sci;
    this.shoppingService.setProductQuantity(newItem);
  }
  removeOne() {
    if (this.sci.quantity > 1) {
      this.sci.quantity = this.sci.quantity - 1;
      let key = this.sci.key;
      let newItem = {};
      newItem[key] = this.sci;
      this.shoppingService.setProductQuantity(newItem);
    }
    else
      this.shoppingService.removeItem(this.sci.key);

  }
  ngOnInit() {
  }

}
