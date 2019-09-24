import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  currentProduct = {};
  categories = [];

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.productService.categories$.subscribe(cs => this.categories = cs);
    let key = this.route.snapshot.paramMap.get('key') || '';
    if (key)
      this.productService.fetchProduct(key).subscribe(p => this.currentProduct = p);
  }

}
