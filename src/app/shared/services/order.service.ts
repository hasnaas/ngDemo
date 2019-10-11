import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Order } from 'shared/models/order.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase) { }

  add(neworder: Partial<Order>) {
    return this.db.list("/orders/").push(neworder);
  }

  get ordersList$() {
    return this.db.list<Order>("/orders/").snapshotChanges().pipe(
      map(ol => {
        return ol.map(o => {
          const data = o.payload.val();
          const oid = o.payload.key;
          return { oid, ...data };
        })
      })
    )
  }

  getUserOrders$(uid: string) {
    return this.db.list<Order>("/orders/").snapshotChanges().pipe(
      map(ol => {
        return ol.map(o => {
          const data = o.payload.val();
          const key = o.payload.key;
          return { key, ...data };
        }).filter(o => o["uid"] == uid)
      })
    )
  }
}
