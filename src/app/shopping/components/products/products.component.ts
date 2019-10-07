import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, OnDestroy } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges, OnDestroy {

  allProducts = [];
  filteredProducts = [];
  shoppingCart: ShoppingCart;
  DataS: Subscription;
  @Input("category") category: string;


  constructor(private productService: ProductService,
    private shoppingService: ShoppingCartService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    const cat: SimpleChange = changes.category;
    this.filteredProducts = (cat.currentValue == 'All' ? this.allProducts : this.allProducts.filter(p => p.category == cat.currentValue));
  }


  async ngOnInit() {

    this.DataS = (await this.shoppingService.getCart()).subscribe(sc => {
      this.shoppingCart = sc;
    }
    ).add(
      this.productService.productsList$.subscribe(pl => {
        this.allProducts = pl;
        this.filteredProducts = (this.category == 'All' ? pl : pl.filter(p => p.category == this.category));
      })
    );
  }

  ngOnDestroy() {
    this.DataS.unsubscribe();
  }
}
