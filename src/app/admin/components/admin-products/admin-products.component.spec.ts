import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsComponent } from './admin-products.component';
import { ProductService } from 'shared/services/product.service';

describe('AdminProductsComponent', () => {
  let component: AdminProductsComponent;
  let service: ProductService;
  //let fixture: ComponentFixture<AdminProductsComponent>;
  /*
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AdminProductsComponent]
      })
        .compileComponents();
    }));
  */
  beforeEach(() => {
    /*  fixture = TestBed.createComponent(AdminProductsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    */
    service = new ProductService(null);
    component = new AdminProductsComponent(service);
  });

  describe("AdminProducts component test suite", () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should filter the products list with the entered keyword', () => {

      let listProducts = [{ title: "Mango" }, { title: "Orange" }, { title: "Mandarine" }, { title: "Garbanzos" }];
      component.productsList = listProducts;
      component.keyword = "ma";
      component.filterPlease();
      expect(component.filteredProductsList).toEqual([{ title: "Mango" }, { title: "Mandarine" }]);

    })
  });


});
