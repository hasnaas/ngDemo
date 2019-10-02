import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Product } from 'shared/models/product.model';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {

  allProducts = [];
  filteredProducts = [];
  shoppingCart: ShoppingCart;
  @Input("category") category: string;


  constructor(private productService: ProductService,
    private shoppingService: ShoppingCartService) {
    this.shoppingService.getCart().subscribe(sc => {
      this.shoppingCart = sc;
    }).add(
      this.productService.productsList$.subscribe(pl => {
        this.allProducts = pl;
        this.filteredProducts = (this.category == 'All' ? pl : pl.filter(p => p.category == this.category));
      }))
  }

  ngOnChanges(changes: SimpleChanges) {
    const cat: SimpleChange = changes.category;
    this.filteredProducts = (cat.currentValue == 'All' ? this.allProducts : this.allProducts.filter(p => p.category == cat.currentValue));
  }


  ngOnInit() {
  }

}
