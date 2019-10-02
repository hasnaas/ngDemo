export class ShoppingCartItem {

    constructor(public key: string,
        public title: string,
        public imageUrl: string,
        public price: number,
        public category: string,
        public quantity: number) { }
    get totalPrice() {
        return this.price * this.quantity;
    }
}