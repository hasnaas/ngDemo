import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  //let fixture: ComponentFixture<ProductCardComponent>;
  let service: ShoppingCartService;
  /*
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ProductCardComponent]
      })
        .compileComponents();
    }));
  */
  beforeEach(() => {
    //  fixture = TestBed.createComponent(ProductCardComponent);
    //component = fixture.componentInstance;
    service = new ShoppingCartService(null);
    component = new ProductCardComponent(service);
    //fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the updateItem() method of the ShoppingCartService when addToCart() is triggered', () => {
    spyOn(service, 'updateItem').and.returnValue(new Promise((resolve, reject) => { }));
    component.addToCart();
    expect(service.updateItem).toHaveBeenCalled;
  })
});
