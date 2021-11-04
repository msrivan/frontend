import { CartItem } from './../model/cart-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cartGrocerys : any;
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(theCartItem: CartItem){
    // check if we already have the item in our cart.
    let alreadyExistInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

  //  this.addcart(theCartItem);
    
    if(this.cartItems.length > 0){
      
          //find the item in the cart based on item id
          existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
          //if this is not null convert it to JSON else initialize it as empty
          // check if we found it
          alreadyExistInCart = (existingCartItem != undefined);
          
    }

    if(alreadyExistInCart){
      // increment the quantity
      existingCartItem.quantity++;
    }else{
      // just add the item in the array
      this.cartItems.push(theCartItem);
    }
    
    
    // compute the totals
    this.computeCartTotals();
  

  }

   addcart(theCartItem){
     let cartData = [];
     let data = localStorage.getItem('cart');
    if(data !== null){
       cartData = JSON.parse(data);
       cartData = [theCartItem , ...cartData];
      // this.updateCartData(cartData);
    }
     else{
        cartData = [theCartItem];
       
     }
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
   }

   updateCartData(cartData) {
     this.cartGrocerys = cartData;
   }
  computeCartTotals() {
    let totalPriceValue: number =0;
    let totalQuantityValue: number =0;

    for(let tempCartItem of this.cartItems){
      totalPriceValue += tempCartItem.quantity * tempCartItem.price; 
      totalQuantityValue += tempCartItem.quantity;
    }

    // publish the new values....all subscribers will recieve the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log the cart data just for debugging purpose
    this.logCartData( totalPriceValue , totalQuantityValue);
    
  }


  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('-----------the cart content--------')
    console.log('cartitem:' +this.cartItems)
    for(let tempCartItem of this.cartItems){
      let subTotalPrice = tempCartItem.price * tempCartItem.quantity;
      console.log(`Name: ${tempCartItem.name}, quantity: ${tempCartItem.quantity}, price: ${tempCartItem.price}, subTotalPrice: ${subTotalPrice} `);
      console.log(`totalPrice: ${totalPriceValue}, totalQuantity: ${totalQuantityValue}`);
    }
  }


  decrementQuantity(theCartItem: CartItem) {
     theCartItem.quantity--;
     if(theCartItem.quantity == 0){
       this.removeCartItem(theCartItem);
     }else{
       this.computeCartTotals();
     }
  }

  removeCartItem(theCartItem: CartItem) {
    // get the item index in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id == theCartItem.id);
    // if found, remove the item from the aray at the given index
    if(itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
    
  }

 
}
