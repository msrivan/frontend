import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { GrocerysComponent } from './admin/grocerys/grocerys.component';
import { ShopgroceryComponent } from './shopgrocery/shopgrocery.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { UpiDetailsComponent } from './upi-details/upi-details.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { BillComponent } from './bill/bill.component';




const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/grocerys', component: GrocerysComponent },
  { path: 'shop', component: ShopgroceryComponent },
  { path: 'cart', component: CartDetailsComponent },
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'checkout', component: CheckoutComponent},
 { path: 'Paymentoptions', component:PaymentOptionsComponent },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'card', component: CardDetailsComponent },
  { path: 'upi', component: UpiDetailsComponent },
  { path: 'bill', component: BillComponent },
  { path: 'netbanking', component: NetBankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
