export class ShoppingCartItem {
    key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    // constructor(public key: string,
    //     public title: string,
    //     public imageUrl: string,
    //     public price: number,
    //     public category: string,
    //     public quantity: number) { }
    constructor(init?: Partial<ShoppingCartItem>) {
        Object.assign(this, init);
    }
    get totalPrice() {
        return this.price * this.quantity;
    }
}