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
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductCardComponent, ProductQuantityComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    DataTableModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    DataTableModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardServiceService,
    ProductService
  ]
})
export class SharedModule { }
