import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Product } from 'shared/models/product.model';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {

  allProducts = [];
  filteredProducts = [];
  @Input("category") category: string;


  constructor(private productService: ProductService) {
    this.productService.productsList$.subscribe(pl => {
      this.allProducts = pl;
      this.filteredProducts = (this.category == 'All' ? pl : pl.filter(p => p.data["category"] == this.category));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const cat: SimpleChange = changes.category;
    this.filteredProducts = (cat.currentValue == 'All' ? this.allProducts : this.allProducts.filter(p => p.data["category"] == cat.currentValue));
  }


  ngOnInit() {
  }

}
