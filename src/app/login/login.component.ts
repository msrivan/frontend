import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Http, Headers, RequestOptions} from '@angular/common/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../model/register.model';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login1: Register = new Register();
  
 public Url: String="http://localhost:8080/addUser";
  username: any;
  password: any;
  email: any;
  phone_no: any;
  lastname: any;
  firstname: any;
  register_id: any;
  button: boolean = false;
  click: boolean = false;
  isAdded: boolean = false;
  
  constructor(private router: Router, private httpClient: HttpClient, private registerService: RegisterService) { }
  loginForm!: FormGroup; 
 

  ngOnInit() {
    this.loginForm = new FormGroup({
      
      username: new FormControl('', [Validators.required, Validators.minLength(13)]),
      password: new FormControl('', [Validators.required, Validators.minLength(13)]),
     
    });
  }
  login (){ 
    
    this.login1.username = this.loginForm.value.username; 
    this.login1.password = this.loginForm.value.password; 
    
    this.save1();
    
    
    }
	
    save1(){
      this.registerService.authUser(this.login1)
                      .subscribe((login1: any)=> {console.log(login1);
                        console.log("register details"+login1);
                        this.isAdded = true;
                        if(this.username ==login1.username && this.password==login1.password)
                              {
                                
                                alert("enter valid credentials");
                              }
                              else{
                                alert("Login Successfully");
                                this.router.navigateByUrl('/shop');
                                
                              }
                      }, error=>console.log(error))
                      
    } 
    // showError(){
    //         let alert = this.alertCtrl.create({
    //           title:'Login failed',
    //           subTitle: Text,
    //           buttons: ['Ok']
    //         });
    //         alert.present();
    // }     
register(){
  this.router.navigateByUrl('/register');
}
  // test(){
  //   this.router.navigate(['/home']);
  // }

}
