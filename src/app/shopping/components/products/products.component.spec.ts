import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { SimpleChange } from '@angular/core';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  //let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductService;
  let shoppingService: ShoppingCartService;

  /*
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent]
    })
      .compileComponents();
  }));
*/
  beforeEach(() => {
    /*
      fixture = TestBed.createComponent(ProductsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    */
    productService = new ProductService(null);
    shoppingService = new ShoppingCartService(null);
    component = new ProductsComponent(productService, shoppingService);
  });

  describe("ProductsComponent test suite", () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should filter displayed products according to the selected category', () => {
      let productsList = [{ title: "carottes", category: "vegetables" }, { title: "potatos", category: "vegetables" }, { title: "bananas", category: "fruits" }];
      component.category = "All";
      component.allProducts = productsList;

      component.category = "vegetables";
      component.ngOnChanges({ category: new SimpleChange(null, component.category, true) });

      expect(component.filteredProducts).toEqual([{ title: "carottes", category: "vegetables" }, { title: "potatos", category: "vegetables" }]);
    })
  })

});
