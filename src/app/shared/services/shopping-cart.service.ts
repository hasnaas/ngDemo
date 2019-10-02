import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from 'shared/models/product.model';
import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getCartId() {
    let cartId = localStorage.getItem("cartId");
    if (cartId)
      return cartId;
    else {
      let createDate = new Date().toDateString();
      cartId = this.db.list("/shopping-carts/").push({ 'cdate': createDate, 'items': { 'xxx': { 'title': '000', 'quantity': 0, 'category': 'unexistant', 'price': 0 } } }).key;
      localStorage.setItem("cartId", cartId);
      return cartId;
    }
  }
  getCart() {
    let cartId = this.getCartId();

    return this.db.object<ShoppingCart>("/shopping-carts/" + cartId).valueChanges().pipe(
      map(sc => {
        return new ShoppingCart(sc.items)
      })
    );

  }

  addToCart(product: Product) {
    let cartId = this.getCartId();
    const key = product.key;
    let newItem = {};
    newItem[key] = { 'quantity': 1, ...product };
    return this.db.object("/shopping-carts/" + cartId).query.ref.child("items").update(newItem);
  }
  setProductQuantity(newItem: {}) {
    let cartId = this.getCartId();
    return this.db.object("/shopping-carts/" + cartId).query.ref.child("items").update(newItem);
  }

  removeItem(key: string) {
    let cartId = this.getCartId();
    return this.db.object("/shopping-carts/" + cartId).query.ref.child("items").ref.child(key).remove();
  }

  async removeCart() {
    let cartId = await this.getCartId();
    localStorage.removeItem("cartId");
    this.db.object("/shopping-carts/" + cartId).remove();

  }

}
