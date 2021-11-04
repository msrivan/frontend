
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {  map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopFormService {

  
  constructor(private http: HttpClient) { }

   getCreditCardMonths(startMonth: number): Observable<number[]>{

    let data: number[] = [];
    // build an array for "Month" dropdown list
    // start at start month and loop until
    for(let theMonth=startMonth; theMonth <=12; theMonth++){
      data.push(theMonth);
    }
    return of(data);
   }

   getCreditCardYears(): Observable<number[]>{
    let data: number[] = [];
    // build an array for "Month" dropdown list
    // start at start month and loop for next 10 years
    let startYear: number = new Date().getFullYear();
    let endYear: number = startYear + 10;
    for(let theYear=startYear; theYear <= endYear; theYear++){
      data.push(theYear);
    }
    return of(data);
   }

  
   
}

