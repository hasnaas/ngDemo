import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Product } from 'shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  get productsList$() {
    return this.db.list<{ "key": string, "data": Product }[]>("/products/").snapshotChanges().pipe(
      map(pl => {
        return pl.map(p => {
          const data = p.payload.val();
          const key = p.payload.key;
          return { key, data };
        })
      })
    )
  }

  fetchProduct(id: string) {
    return this.db.object<Product>("/products/" + id).valueChanges();
  }

  updateProduct(id: string, value: any) {
    return this.db.object("/products/" + id).update(value);
  }

  addProduct(value: any) {
    return this.db.list("/products/").push(value);
  }

  deleteProduct(id: string) {
    return this.db.object("/products/" + id).remove();
  }

  get categories$() {
    return this.db.list("/categories/").snapshotChanges().pipe(
      map(
        categories => {
          return categories.map(categorie => {
            let key = categorie.key;
            return { key, ...categorie.payload.val() };
          })
        }
      )
    )
  }
}
