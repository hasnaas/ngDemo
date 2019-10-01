import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from "angular-6-datatable";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { CustomFormsModule } from 'ng2-validation'
import { ToastsService } from './services/toasts.service';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { ShoppingCartService } from './services/shopping-cart.service';



@NgModule({
  declarations: [ProductCardComponent, ProductQuantityComponent, ToastsContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    DataTableModule
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
    AuthGuardServiceService,
    ProductService,
    ToastsService,
    ShoppingCartService
  ]
})
export class SharedModule { }
