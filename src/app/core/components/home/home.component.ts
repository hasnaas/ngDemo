import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from 'app/app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any[];
  currentC: string = 'All';

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.queryParamMap.subscribe(qpm => {
      this.currentC = qpm.get("category") || 'All'

    });
    this.productService.categories$.subscribe(cs => {
      this.categories = cs;
    })

  }

  setCategory(key: string) {
    this.router.navigate([""], { queryParams: { 'category': key } });
  }
  ngOnInit() {
  }

}
