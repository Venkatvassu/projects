import { Component, OnInit } from '@angular/core';
import { Cont1Component } from './cont1/cont1.component';
import { NavigationEnd, Router } from '@angular/router';
// import { ProductsService } from './products.service';
// import { response } from 'express';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NsTechno';

  ShowHeader=true;

  constructor(private router:Router) {

    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/home'){
            this.ShowHeader=true
          }
        }
      }
    )

  }


  // ngOnInit(): void {
  //   this.productapi.getproducts().subscribe(response=>{
  //     console.log("api called", response)
  //   })
  // }

}
