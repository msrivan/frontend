import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../model/cart-item';
import { Grocery } from '../model/Grocery';
import { HttpClientService } from '../service/http-client.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-shopgrocery',
  templateUrl: './shopgrocery.component.html',
  styleUrls: ['./shopgrocery.component.css']
})
export class ShopgroceryComponent implements OnInit {

  grocerys: Array<Grocery>;
  selectedgrocerys: Grocery;
  grocerysRecieved: Array<Grocery>;
  cartGrocerys: any;
  product: Array<Grocery>;
 

  constructor(private router: Router, private cartService: CartService,private httpClientService: HttpClientService,private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        const selectedUserId = params['id'];
    console.log("Id :" +selectedUserId);

   
    if(selectedUserId){
    this.httpClientService.getoneGrocery(selectedUserId).subscribe(
      response => this.handleoneSuccessfulResponse(response),
    );
    
    }

    else{
      this.httpClientService.getGrocerys().subscribe(
        response => this.handleSuccessfulResponse(response),
      );
    }
  }
  );
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.grocerys = new Array<Grocery>();
    //get books returned by the api call
    this.grocerysRecieved = response;
    for (const grocery of this.grocerysRecieved) {

      const grocerywithRetrievedImageField = new Grocery();
      grocerywithRetrievedImageField.id = grocery.id;
      grocerywithRetrievedImageField.name = grocery.name;
      //populate retrieved image field so that book image can be displayed
      grocerywithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + grocery.picByte;
      grocerywithRetrievedImageField.brand = grocery.brand;
      grocerywithRetrievedImageField.price = grocery.price;
      grocerywithRetrievedImageField.picByte = grocery.picByte;
      this.grocerys.push(grocerywithRetrievedImageField);
      console.log("grocerys :" +grocery);
    }
  }

  handleoneSuccessfulResponse(response) {
    this.grocerys = new Array<Grocery>();
    //get books returned by the api call
   // this.grocerysRecieved = response;
    const grocery = response;

      const grocerywithRetrievedImageField = new Grocery();
      grocerywithRetrievedImageField.id = grocery.id;
      grocerywithRetrievedImageField.name = grocery.name;
      //populate retrieved image field so that book image can be displayed
      grocerywithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + grocery.picByte;
      grocerywithRetrievedImageField.brand = grocery.brand;
      grocerywithRetrievedImageField.price = grocery.price;
      grocerywithRetrievedImageField.picByte = grocery.picByte;
      this.grocerys.push(grocerywithRetrievedImageField);
      console.log("grocery's :" +grocery);
    
  }

  
  addToCart(theProduct: Grocery){
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }

  updateCartData(cartData) {
    this.cartGrocerys = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

}
