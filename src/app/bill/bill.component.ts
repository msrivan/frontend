import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Order } from '../model/order';
import { Purchase } from '../model/purchase';
import { CartService } from '../service/cart.service';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  cartGrocerys : any;
  

  constructor(private cartService: CartService,private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.listCartDetails();
  }

  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;
   // this.cartGrocerys = this.cartService.cartGrocerys;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
    // compute cart total price and quantity
      this.cartService.computeCartTotals();
     
     
  }


}
