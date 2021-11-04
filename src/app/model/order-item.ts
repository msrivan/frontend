import { CartItem } from './cart-item';
export class OrderItem {
    
    name : string;
   // picByte: string;
    price: number;
    quantity: number;
    productId: number;

    constructor(cartItem: CartItem){
        this.name = cartItem.name;
       // this.picByte = cartItem.retrievedImage;
        this.price = cartItem.price;
        this.quantity = cartItem.quantity;
        this.productId = cartItem.id;
    }

}
