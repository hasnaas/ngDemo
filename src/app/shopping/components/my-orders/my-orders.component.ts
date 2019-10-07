import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order.model';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  oList$: Observable<Order[]>;

  constructor(private orderService: OrderService,
    private authService: AuthService) {
    this.oList$ = this.authService.appUser$.pipe(
      switchMap(u => this.orderService.getUserOrders$(u.uid))
    )
  }

  ngOnInit() {
  }

}
