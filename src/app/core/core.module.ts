import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingModule } from 'app/shopping/shopping.module';



@NgModule({
  declarations: [BsNavbarComponent, NotFoundComponent, HomeComponent, LoginComponent],
  imports: [
    SharedModule,
    ShoppingModule,
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
