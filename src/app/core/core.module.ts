import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';



@NgModule({
  declarations: [BsNavbarComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([

    ])
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
