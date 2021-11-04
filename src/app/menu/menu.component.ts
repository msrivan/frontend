import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grocery } from '../model/Grocery';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
            this.selectedGrocery = this.grocerys.find(grocery => {
              return grocery.id === +id;
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
         this.grocerys.push(grocerywithRetrievedImageField);
      }
    }
     
    getgrocery(id: number){
      this.router.navigate(['/shop'], { queryParams: { id: id } })
   }

   logout(){
    this.router.navigateByUrl('/login');
  }
}
