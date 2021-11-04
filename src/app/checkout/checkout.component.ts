import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from '../model/cart-item';
import { Order } from '../model/order';
import { OrderItem } from '../model/order-item';
import { Purchase } from '../model/purchase';
import { CartService } from '../service/cart.service';
import { CheckoutService } from '../service/checkout.service';
import { ShopFormService } from '../service/shop-form.service';
import { ShopValidators } from '../validators/shop-validators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    cartItems: CartItem[] = [];
    totalPrice: number = 0;
    totalQuantity: number = 0;
    cartGrocerys : any;
  
    checkoutFormGroup: FormGroup;
  
  
    constructor(
      private formBuilder: FormBuilder, 
              private shopFormService: ShopFormService,
              private cartService: CartService,
              private checkoutService: CheckoutService,
              private router: Router) { }
  
    ngOnInit() {
      this.checkoutFormGroup = this.formBuilder.group({
          customer: this.formBuilder.group({
            firstName: new FormControl('', [Validators.required, Validators.minLength(2), ShopValidators.notOnlyWhiteSpaces]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(2), ShopValidators.notOnlyWhiteSpaces]),
            email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            address: new FormControl('', [Validators.required, Validators.minLength(10), ShopValidators.notOnlyWhiteSpaces]),
          }),
          // Address: this.formBuilder.group({
            
          //   address: new FormControl('', [Validators.required, Validators.minLength(10), ShopValidators.notOnlyWhiteSpaces]),
            
          // })
         
         
      });

      
      this.listCartDetails();
      this.reviewCartTotals();
  }

  reviewCartTotals() {
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    console.log("TotalPrice: " +this.totalPrice);
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
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
    
    get firstName(){ return this.checkoutFormGroup.get('customer.firstName');}
    get lastName(){ return this.checkoutFormGroup.get('customer.lastName');}
    get email(){ return this.checkoutFormGroup.get('customer.email');}
    // getters for shipping Address
    get address(){ return this.checkoutFormGroup.get('customer.address');}
  
    onSubmit(){

      if(this.checkoutFormGroup.invalid){
        this.checkoutFormGroup.markAllAsTouched();
        return;
      }
  
      // set up order
      let order= new Order();
      order.totalPrice = this.totalPrice;
      order.totalQuantity = this.totalQuantity;
  
      // get cart items
      const cartItems = this.cartService.cartItems;
  
      // create orderItems from cartItems
      let orderItems: OrderItem[] = cartItems.map(tempCartItem => new OrderItem(tempCartItem));
  
      // set up purchase
      let purchase = new Purchase();
  
      // populate purchase - customer
      purchase.customer = this.checkoutFormGroup.controls['customer'].value;
      console.log("Customer :" +JSON.stringify(purchase.customer));
      // populate purchase - shippingAddress
     // purchase.order = this.checkoutFormGroup.controls['address'].value;
      
  
      // populate purchase - order and orderItems
      purchase.order = order;
      purchase.orderItems = orderItems;

      console.log("Purchase :" +JSON.stringify(order));
      console.log("Purchase Items:" +JSON.stringify(orderItems));
  
  
      // call REST API via checkoutService
      this.checkoutService.placeOrder(purchase).subscribe(
        data =>{
           alert(`your order has been recieved.\n order tracking number: ${data.orderTrackingNumber}`);
           // reset checkout form
           this.resetCart();
        },
        error=>{
          alert(`there was a error: ${error.message}`);
        }
      )
    }

    resetCart() {
      // reset cart data
      this.cartService.cartItems = [];
      this.cartService.totalPrice.next(0);
      this.cartService.totalQuantity.next(0);
      this.cartService.cartItems = [];
      // reset the form
      this.checkoutFormGroup.reset();
      
      // navigate back to the products page
      this.router.navigateByUrl('/Paymentoptions');
    }
  }
