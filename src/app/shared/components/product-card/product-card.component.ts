import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product.model';
import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input("product") product: Product;

  @Input("shopping-cart") sc: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
  ngOnInit() {
  }

}
