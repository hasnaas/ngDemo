export class ShoppingCart {
    cdate: Date;
    items: { ShoppingCartItem };

    get cartTotalPrice() {
        let p = 0;
        for (let i in this.items)
            p += this.items[i].price * this.items[i].quantity;
        return p;
    }
}