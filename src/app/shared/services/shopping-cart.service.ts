import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item.model';
import { ShoppingCart } from 'shared/models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {

  }

  async getCartId(): Promise<string> {

    let cartId = localStorage.getItem("cartId");
    console.log("local storage check in :" + cartId);
    if (cartId)
      return cartId;
    else {
      let createDate = new Date().getTime();
      console.log("cart db creation");
      let result = await this.db.list("/shopping-carts/").push({ 'cdate': createDate, 'items': { 'xxx': { 'title': '000', 'quantity': 0, 'category': 'unexistant', 'price': 0 } } });
      //let result = await this.db.list("/shopping-carts/").push({ 'cdate': createDate, 'items': {} });
      cartId = result.key;
      localStorage.setItem("cartId", cartId);
      return cartId;
    }
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getCartId();
    return this.db.object<ShoppingCart>("/shopping-carts/" + cartId).valueChanges().pipe(
      map(sc => {
        // console.log(sc.items);
        return new ShoppingCart(sc.items)
      })
    );
  }

  async removeCart() {
    let cartId = await this.getCartId();
    //temporary, must use remove() instead of setting to a bogus object
    this.db.object("/shopping-carts/" + cartId).query.ref.child("items").set({ 'xxx': { 'title': '000', 'quantity': 0, 'category': 'unexistant', 'price': 0 } })
  }

  removeItem(cartId: string, productId: string) {
    return this.db.object("/shopping-carts/" + cartId + "/items/" + productId).remove();
  }

  async updateItem(product: Partial<ShoppingCartItem>, change: number) {
    let cartId = await this.getCartId();
    let quantity = (product.quantity || 0) + change;
    if (quantity === 0) this.removeItem(cartId, product.key);
    else {
      product.quantity = quantity;
      let newItem = {};
      newItem[product.key] = product;
      this.db.object("/shopping-carts/" + cartId).query.ref.child("items").update(newItem);
    }

  }
}
