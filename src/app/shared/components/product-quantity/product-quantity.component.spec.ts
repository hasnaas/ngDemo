import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityComponent } from './product-quantity.component';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item.model';



describe('ProductQuantityComponent', () => {
  let component: ProductQuantityComponent;
  let service: ShoppingCartService;
  // let fixture: ComponentFixture<ProductQuantityComponent>;

  /*
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ProductQuantityComponent]
     })
       .compileComponents();
   }));
 */
  beforeEach(() => {
    /*  fixture = TestBed.createComponent(ProductQuantityComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    */
    service = new ShoppingCartService(null);
    component = new ProductQuantityComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should increase the product quantity when the addOne() method is called', () => {
    let shoppingItem = new ShoppingCartItem({ title: 'mockItem', quantity: 1 });
    component.sci = shoppingItem;

  });


});
