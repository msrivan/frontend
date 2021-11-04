import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

private baseUrl = 'http://user.us-east-2.elasticbeanstalk.com/addUser'; 
private baseUrl1 ='http://user.us-east-2.elasticbeanstalk.com/authUser';

constructor(private http: HttpClient) { }
addUser(register1: Register): Observable<Register>{
return this.http.post<Register>(this.baseUrl, register1);
}
authUser(login1: Register): Observable<Register>{
return this.http.post<Register>(this.baseUrl1, login1);
}

getUserById(register_id: number){
return this.http.get<Register>(`${this.baseUrl}/${register_id}`)
}

}
