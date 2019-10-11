import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  categories: any[];
  currentC: string = 'All';
  displayShop: boolean = false;
  isCollapsed = false;
  DataS: Subscription;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  setCategory(key: string) {
    this.router.navigate([""], { queryParams: { 'category': key } });
    this.isCollapsed = true;
  }

  ngOnInit() {

    this.DataS = this.route.queryParamMap.subscribe(qpm => {
      this.currentC = qpm.get("category") || 'All'

    }).add(
      this.productService.categories$.subscribe(cs => {
        this.categories = cs;
      }));
    setTimeout(() => { this.displayShop = true }, 2000);
  }

  ngOnDestroy() {
    this.DataS.unsubscribe();
  }
}
