import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent{

  paymentFormGroup: FormGroup;
  favoritePayment: string;
  payment_methods: string[] = ['Add Debit/Credit/ATM Card', 'Net Banking', 'UPI', 'Pay on Delivery']


  constructor(private router: Router, private formBuilder: FormBuilder) { 
  }

  // someFunction(event: any) {   
  //   this.favoritePayment = event.value;
  // }

  payFunction() {
    if (this.favoritePayment.includes('Card'))
      return this.router.navigate(['card']);
    if (this.favoritePayment.includes('UPI'))
      return this.router.navigate(['upi']);
      if (this.favoritePayment.includes('Net Banking'))
      return this.router.navigate(['netbanking']);
      if (this.favoritePayment.includes('Pay on Delivery'))
      return this.router.navigate(['bill']);
    else
      return 'card not selected'
  } 
}


  