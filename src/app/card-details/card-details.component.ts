import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopFormService } from '../service/shop-form.service';
import { ShopValidators } from '../validators/shop-validators';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  
  constructor(private formBuilder: FormBuilder, 
  private shopFormService: ShopFormService,
  private router: Router) { }
 
  ngOnInit() {
    this.checkoutFormGroup = this.formBuilder.group({
      creditCard: this.formBuilder.group({
        cardType: new FormControl('', [Validators.required]),
        nameOnCard:new FormControl('', [Validators.required, Validators.minLength(2), ShopValidators.notOnlyWhiteSpaces]),
        cardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
        securityCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
        expirationMonth: [''],
        expirationYear: [''],
      })
    });
  this.getCreditCardYears();
  this.getCreditCardMonths();
}

  get creditCardType(){ return this.checkoutFormGroup.get('creditCard.cardType');}
  get creditCardNameOnCard(){ return this.checkoutFormGroup.get('creditCard.nameOnCard');}
  get creditCardNumber(){ return this.checkoutFormGroup.get('creditCard.cardNumber');}
  get creditCardSecurityCode(){ return this.checkoutFormGroup.get('creditCard.securityCode');}

  getCreditCardYears(){
    this.shopFormService.getCreditCardYears().subscribe(
    data=>{
        this.creditCardYears = data;
    });
  }

  getCreditCardMonths(){
    let startMonth: number = new Date().getMonth() + 1;
    this.shopFormService.getCreditCardMonths(startMonth).subscribe(
    data=>{
        this.creditCardMonths = data;
    });
  }
  onChangeYear(){
    let currentYear: number = new Date().getFullYear();
    let selectedYear: number = this.checkoutFormGroup.get('creditCard').value.expirationYear;
    let startMonth: number;
    // if the current year equals the selected year, then start with the current month.
    if(currentYear == selectedYear){
      startMonth = new Date().getMonth() + 1;
    }else{
      startMonth = 1;
    }
    this.shopFormService.getCreditCardMonths(startMonth).subscribe(
      data=>{
          this.creditCardMonths = data;
      });

  }
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