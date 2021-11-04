import { Grocery } from "./Grocery";

export class CartItem {
    reset() {
      throw new Error('Method not implemented.');
    }
    id: number;
    name: string;
    retrievedImage: string;
    price: number;

    quantity: number;

    constructor(product: Grocery){
        this.id = product.id;
        this.name = product.name;
        this.retrievedImage = product.retrievedImage;
        this.price = product.price;
        this.quantity = 1;
    }
}
