import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from "angular-6-datatable";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { OrderSuccessComponent } from 'app/shopping/components/order-success/order-success.component';
import { CustomFormsModule } from 'ng2-validation';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ToastsService } from './services/toasts.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [ProductCardComponent, ProductQuantityComponent, ToastsContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    DataTableModule,
    RouterModule.forChild([
      { path: "order-success/:id", component: OrderSuccessComponent }
    ])
  ],
  exports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    DataTableModule,
    ToastsContainerComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  providers: [
    AuthService,
    UserService,
    OrderService,
    AuthGuardServiceService,
    ProductService,
    ToastsService
  ]
})
export class SharedModule { }
