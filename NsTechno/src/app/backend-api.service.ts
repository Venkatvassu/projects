import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService implements OnInit {

  public productApi = "https://dummyjson.com/products";
  constructor(public httpclint:HttpClient) {



  }
  ngOnInit(): void {

  }

  getdata() {
    return this.httpclint.get(this.productApi);
  }

}
