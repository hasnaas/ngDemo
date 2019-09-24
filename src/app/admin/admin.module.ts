import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardServiceService } from './services/admin-auth-guard-service.service';
import { RouterModule } from '@angular/router';
import { AuthGuardServiceService } from 'shared/services/auth-guard-service.service';



@NgModule({
  declarations: [AdminOrdersComponent, AdminProductsComponent, ProductFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "admin/products/:key", component: ProductFormComponent, canActivate: [AuthGuardServiceService, AdminAuthGuardServiceService] }
    ])
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
