import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  productsList: any[];
  filteredProductsList: any[];
  keyword: string = "";
  DataS: Subscription;

  constructor(private productService: ProductService) {
    this.DataS = this.productService.productsList$.subscribe(pl => {
      this.productsList = pl;
      this.filteredProductsList = pl;
    })
  }

  filterPlease() {
    this.filteredProductsList = this.productsList.filter(p => p.data.title.toLowerCase().includes(this.keyword))
  }

  ngOnInit() {
    this.keyword = "";
  }

  ngOnDestroy() {
    this.DataS.unsubscribe();
  }

}
