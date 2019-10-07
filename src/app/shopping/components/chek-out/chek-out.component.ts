import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Router } from '@angular/router';
import { ToastsService } from 'shared/services/toasts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chek-out',
  templateUrl: './chek-out.component.html',
  styleUrls: ['./chek-out.component.scss']
})
export class ChekOutComponent implements OnInit, OnDestroy {

  shoppingCart: ShoppingCart;
  shippingDetails: { name: string, address1: string, address2: string, city: string } = { name: "", address1: "", address2: "", city: "" };
  uid: string;
  DataS: Subscription;

  constructor(private shoppingService: ShoppingCartService,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router,
    private toastService: ToastsService) {
  }

  async ngOnInit() {
    this.DataS = (await this.shoppingService.getCart()).subscribe(sc => {
      this.shoppingCart = sc;
    }).add(
      this.authService.appUser$.subscribe(u => this.uid = u.uid)
    )
  }

  async placeOrder(errorTemplate) {

    let dp = new Date().getTime();
    let neworder = {
      uid: this.uid,
      shipping: this.shippingDetails,
      datePlaced: dp,
      items: this.shoppingCart.itemsMap
    }
    try {
      let result = await this.orderService.add(neworder);
      this.shoppingService.removeCart();
      this.router.navigate(["/order-success/" + result.key]);
    }
    catch (error) {
      //this.toastService.show("Problem placing order, please retry later");
      this.toastService.show(errorTemplate, { classname: 'bg-danger text-light', delay: 3000 });
      //console.log(error);
    }

  }

  ngOnDestroy() {
    this.DataS.unsubscribe();
  }

}
