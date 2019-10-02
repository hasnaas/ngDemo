export class ShoppingCart {
    cdate: Date;

    constructor(public items: { ShoppingCartItem }) {
    }

    get cartTotalPrice() {
        let p = 0;
        for (let i in this.items)
            p += this.items[i].price * this.items[i].quantity;
        return p;
    }

    get cartTotalItems() {
        let t = 0;
        for (let i in this.items) {
            t += parseInt(this.items[i].quantity);
        }
        return t;
    }
}