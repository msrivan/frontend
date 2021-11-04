import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopFormService } from '../service/shop-form.service';
import { ShopValidators } from '../validators/shop-validators';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css']
})
export class NetBankingComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private shopFormService: ShopFormService,
    private router: Router) { }

 

  ngOnInit() {
    this.checkoutFormGroup = this.formBuilder.group({
      netBanking: this.formBuilder.group({
        bankSType: new FormControl('', [Validators.required]),
        userName:new FormControl('', [Validators.required, Validators.minLength(2), ShopValidators.notOnlyWhiteSpaces]),
        password: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
        SecurityCode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
              })
    });
}

  get netBankingBankType(){ return this.checkoutFormGroup.get('netBanking.bankType');}
  get netBankingUserName(){ return this.checkoutFormGroup.get('netBanking.userName');}
  get netBankingPassword(){ return this.checkoutFormGroup.get('netBanking.password');}
  get netBankingSecurityCode(){ return this.checkoutFormGroup.get('netBanking.SecurityCode');}

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
