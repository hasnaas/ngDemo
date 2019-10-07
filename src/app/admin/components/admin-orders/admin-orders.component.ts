import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'shared/models/order.model';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  oList$: Observable<Order[]>;

  constructor(private orderService: OrderService) {
    this.oList$ = this.orderService.ordersList$;
  }

  ngOnInit() {
  }

}
