import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/register.model';
import { RegisterService } from '../service/register.service';

//import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  register1: Register = new Register();
  
  firstname: any;
  lastname: any;
  email: any;
  phoneno: any;
  username: any;
  password: any;
  isAdded: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isValidFormSubmitted = false;  
  constructor(private router: Router, private httpClient: HttpClient, private registerService: RegisterService) { }
  
  userForm!: FormGroup;  
  ngOnInit() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(15)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(15)]),    
      email: new FormControl('', [Validators.required, Validators.minLength(13)]), 
      phoneno: new FormControl('', [Validators.required, Validators.minLength(10)]),
      username: new FormControl('', [Validators.required, Validators.minLength(13)]),
      password: new FormControl('', [Validators.required, Validators.minLength(13)]),
     
    });
   
 
  }

  onSubmit(){
    this.register1.firstname = this.userForm.value.firstname;
    this.register1.lastname = this.userForm.value.lastname;
    this.register1.email = this.userForm.value.email; 
    this.register1.phoneno = this.userForm.value.phoneno;
    this.register1.username = this.userForm.value.username; 
    this.register1.password = this.userForm.value.password; 
    if (!this.register1.firstname || !this.register1.lastname || !this.register1.email || !this.register1.phoneno || !this.register1.username || !this.register1.password) {  
      alert("enter the values"); 
   }  else{
     alert("Register successfully")
    this.router.navigateByUrl('/login');
   }
    this.save();

    
 }  
  

  save(){
    this.registerService.addUser(this.register1)
                    .subscribe((register1: any)=> {console.log(register1);
                      console.log("register details"+register1);
                      this.isAdded = true;
                      
                    }, error=>console.log(error))
                    
  }
  
}


