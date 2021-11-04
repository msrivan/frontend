import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Grocery } from '../model/Grocery';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('http://user.us-east-2.elasticbeanstalk.com/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://user.us-east-2.elasticbeanstalk.com/users/add', newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://user.us-east-2.elasticbeanstalk.com/users/' + id);
  }

  getGrocerys() {
    return this.httpClient.get<Grocery[]>('http://user.us-east-2.elasticbeanstalk.com/Grocerys/get');
  }

  addGrocery(newGrocery: Grocery) {
    return this.httpClient.post<Grocery>('http://user.us-east-2.elasticbeanstalk.com/Grocerys/add', newGrocery);
  }

  deleteGrocery(id) {
    return this.httpClient.delete<Grocery>('http://user.us-east-2.elasticbeanstalk.com/Grocerys/' + id);
  }

  updateGrocery(updateGrocery: Grocery) {
    return this.httpClient.put<Grocery>('http://user.us-east-2.elasticbeanstalk.com/Grocerys/update', updateGrocery);
  }

  getoneGrocery(id) {
    return this.httpClient.get<Grocery>('http://user.us-east-2.elasticbeanstalk.com/Grocerys/get/' + id);
  }

}