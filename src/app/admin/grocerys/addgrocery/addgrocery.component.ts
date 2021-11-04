import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grocery } from 'src/app/model/Grocery';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addgrocery',
  templateUrl: './addgrocery.component.html',
  styleUrls: ['./addgrocery.component.css']
})
export class AddgroceryComponent implements OnInit {

  @Input()
  grocery: Grocery;

  @Output()
  groceryAddedEvent = new EventEmitter();
  
  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveGrocery() {

    if (this.grocery.id == null) {

    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/Grocerys/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addGrocery(this.grocery).subscribe(
            (book) => {
              this.groceryAddedEvent.emit();
              this.router.navigate(['admin', 'grocerys']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }else {
    this.httpClientService.updateGrocery(this.grocery).subscribe(
      (grocery) => {
        this.groceryAddedEvent.emit();
        this.router.navigate(['admin', 'grocerys']);
      }
    );
  }

}

  
}