import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardServiceService } from './services/admin-auth-guard-service.service';



@NgModule({
  declarations: [AdminOrdersComponent, AdminProductsComponent, ProductFormComponent],
  imports: [
    SharedModule
  ],
  exports: [
    AdminOrdersComponent,
    AdminProductsComponent
  ],
  providers: [
    AdminAuthGuardServiceService
  ]
})
export class AdminModule { }
