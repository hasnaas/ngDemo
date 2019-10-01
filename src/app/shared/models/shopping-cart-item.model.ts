export class ShoppingCartItem {
    key: string;
    title: string;
    imageUrl: string;
    price: number;
    category: string;
    quantity: number;

    get totalPrice() {
        return this.price * this.quantity;
    }
}