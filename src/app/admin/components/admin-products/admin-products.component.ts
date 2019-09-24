import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  productsList: any[];
  filteredProductsList: any[];
  keyword: string = "";

  constructor(private productService: ProductService) {
    this.productService.productsList$.subscribe(pl => {
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

}
