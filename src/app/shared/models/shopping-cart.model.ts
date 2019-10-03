import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
    cdate: Date;
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { ShoppingCartItem } | {}) {
        this.itemsMap = itemsMap || {};

        for (let i in itemsMap) {
            let p = itemsMap[i];
            this.items.push(new ShoppingCartItem({ ...p, key: i }));
        }
    }

    getQuantity(productId: string) {
        let item = this.itemsMap[productId];
        return item ? item.quantity : 0;
    }
    get cartTotalPrice() {
        let p = 0;
        for (let i in this.itemsMap)
            p += this.itemsMap[i].price * this.itemsMap[i].quantity;
        return p;
    }

    get cartTotalItems() {
        let t = 0;
        for (let i in this.itemsMap) {
            t += parseInt(this.itemsMap[i].quantity);
        }
        return t;
    }
}