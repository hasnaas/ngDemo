import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'environments/environment';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HomeComponent } from './core/components/home/home.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminModule } from './admin/admin.module';
import { ChekOutComponent } from './shopping/components/chek-out/chek-out.component';
import { AuthGuardServiceService } from 'shared/services/auth-guard-service.service';
import { AdminAuthGuardServiceService } from './admin/services/admin-auth-guard-service.service';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    ShoppingModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },

      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardServiceService] },

      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardServiceService, AdminAuthGuardServiceService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardServiceService, AdminAuthGuardServiceService] },

      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
