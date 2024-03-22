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
