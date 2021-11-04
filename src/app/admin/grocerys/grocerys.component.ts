import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/model/Grocery';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grocerys',
  templateUrl: './grocerys.component.html',
  styleUrls: ['./grocerys.component.css']
})
export class GrocerysComponent implements OnInit {

  grocerys: Array<Grocery>;
  grocerysRecieved: Array<Grocery>;
  selectedGrocery: Grocery;
  action: string;

  constructor(private httpClientService: HttpClientService, private activedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.refreshData();
    }
  
    refreshData() {
      this.httpClientService.getGrocerys().subscribe(
        response => this.handleSuccessfulResponse(response)
      );
      this.activedRoute.queryParams.subscribe(
        (params) => {
          // get the url parameter named action. this can either be add or view.
          this.action = params['action'];
    // get the parameter id. this will be the id of the book whose details 
    // are to be displayed when action is view.
    const id = params['id'];
    // if id exists, convert it to integer and then retrive the book from
    // the books array
          if (id) {
            this.selectedGrocery = this.grocerys.find(book => {
              return book.id === +id;
            });
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
        grocerywithRetrievedImageField.picByte=grocery.picByte;
        this.grocerys.push(grocerywithRetrievedImageField);
      }
    }
  
    addGrocery() {
      this.selectedGrocery = new Grocery();
      this.router.navigate(['admin', 'grocerys'], { queryParams: { action: 'add' } });
    }

    viewGrocery(id: number) {
      this.router.navigate(['admin', 'grocerys'], { queryParams: { id, action: 'view' } });
    }
  }