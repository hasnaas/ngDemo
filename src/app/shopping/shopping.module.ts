import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ChekOutComponent } from './components/chek-out/chek-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShippingCartSummaryComponent } from './components/shipping-cart-summary/shipping-cart-summary.component';
import { RouterModule } from '@angular/router';
import { AuthGuardServiceService } from 'shared/services/auth-guard-service.service';



@NgModule({
  declarations: [ShoppingCartComponent, ChekOutComponent, MyOrdersComponent, OrderSuccessComponent, ProductsComponent, ShippingFormComponent, ShippingCartSummaryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'check-out', component: ChekOutComponent, canActivate: [AuthGuardServiceService] },
    ])
  ],
  exports: [
    ShoppingCartComponent,
    ProductsComponent,
    ChekOutComponent,
    MyOrdersComponent
  ]
})
export class ShoppingModule { }
