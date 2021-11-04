import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CheckoutService } from '../service/checkout.service';
import { ShopFormService } from '../service/shop-form.service';
import { ShopValidators } from '../validators/shop-validators';

@Component({
  selector: 'app-upi-details',
  templateUrl: './upi-details.component.html',
  styleUrls: ['./upi-details.component.css']
})
export class UpiDetailsComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
    private shopFormService: ShopFormService,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router) { }
 
  
  ngOnInit() {
    this.checkoutFormGroup = this.formBuilder.group({
      UPI: this.formBuilder.group({
       phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
        EnterUPIID: new FormControl('', [Validators.required, Validators.minLength(5), ShopValidators.notOnlyWhiteSpaces]),
             })
    });
  }
   get UPIphoneNumber(){ return this.checkoutFormGroup.get('UPI. phoneNumber');}
  get UPIEnterUPIID(){ return this.checkoutFormGroup.get( 'UPI.EnterUPIID');}
 
  paymentFunc(){
    alert("Payment Successful");
  }
  
  onSubmit(){

    if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }
  }
}
  