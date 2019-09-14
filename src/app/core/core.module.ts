import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { ShoppingCartComponent } from 'app/shopping/components/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [BsNavbarComponent, NotFoundComponent, HomeComponent, LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    BsNavbarComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
