import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ChekOutComponent } from './components/chek-out/chek-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShippingCartComponent } from './components/shipping-cart/shipping-cart.component';
import { ShippingCartSummaryComponent } from './components/shipping-cart-summary/shipping-cart-summary.component';



@NgModule({
  declarations: [ShoppingCartComponent, ChekOutComponent, MyOrdersComponent, OrderSuccessComponent, ProductsComponent, ShippingFormComponent, ShippingCartComponent, ShippingCartSummaryComponent],
  imports: [
    SharedModule
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingModule { }
