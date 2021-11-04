
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl: string = "http://user.us-east-2.elasticbeanstalk.com/api/checkout/purchase";

  constructor(private http: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.http.post<GetResponsePurchase>(this.purchaseUrl, purchase);
    // .pipe(
    //   map(response=> response.orderTrackingNumber)
    // )
  }

}

interface GetResponsePurchase{
      orderTrackingNumber: string;
}
