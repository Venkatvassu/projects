import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestServiceService implements OnInit{


  productApi = "https://dummyjson.com/recipes";
  constructor(public http:HttpClient) { }

  ngOnInit(){


  }
  getitems(){

    return this.http.get(this.productApi);
  }
}




// src/app/api.service.ts

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private apiUrl = 'https://api.example.com'; // Replace with your API base URL
//   private apiToken = 'YOUR_API_TOKEN'; // Replace with your API token

//   constructor(private http: HttpClient) { }

//   // Function to make GET request to API endpoint
//   public getWeatherData(): Observable<any> {
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${this.apiToken}`
//     });

//     return this.http.get(`${this.apiUrl}/weather`, { headers });
//   }
// }
