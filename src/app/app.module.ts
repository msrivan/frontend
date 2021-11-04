import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { GrocerysComponent } from './admin/grocerys/grocerys.component';
import { AddgroceryComponent } from './admin/grocerys/addgrocery/addgrocery.component';
import { ViewgroceryComponent } from './admin/grocerys/viewgrocery/viewgrocery.component';
import { ShopgroceryComponent } from './shopgrocery/shopgrocery.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatTableModule } from '@angular/material';
import { CardDetailsComponent } from './card-details/card-details.component';
import { UpiDetailsComponent } from './upi-details/upi-details.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { BillComponent } from './bill/bill.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    GrocerysComponent,
    AddgroceryComponent,
    ViewgroceryComponent,
    ShopgroceryComponent,
    CartDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    PaymentOptionsComponent,
    CardDetailsComponent,
    UpiDetailsComponent,
    NetBankingComponent,
    BillComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
