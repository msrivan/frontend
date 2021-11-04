import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Grocery } from 'src/app/model/Grocery';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewgrocery',
  templateUrl: './viewgrocery.component.html',
  styleUrls: ['./viewgrocery.component.css']
})
export class ViewgroceryComponent implements OnInit {

  @Input()
  grocery: Grocery;

  @Output()
  groceryDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  deleteGrocery() {
    this.httpClientService.deleteGrocery(this.grocery.id).subscribe(
      (grocery) => {
        this.groceryDeletedEvent.emit();
        this.router.navigate(['admin', 'grocerys']);
      }
    );
  }

  editGrocery() {
    this.router.navigate(['admin', 'grocerys'], { queryParams: { action: 'edit', id: this.grocery.id } });
  }

}