import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroceryStore';
  constructor(private elementRef: ElementRef, private router: Router){
     
  }
  ngOnIint(){}
  login (): void{
    
   // this._router.navigateByUrl('/home')
   //this.router.navigateByUrl('/home');
   // this._router.navigate(['home']);
    //this.router.navigateByUrl('/Home');
      
}
register(){

}
// test(){
  //   this.router.navigate(['/home']);
  // }
 ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor='hsl(60, 24%, 96%)'
  }
}

