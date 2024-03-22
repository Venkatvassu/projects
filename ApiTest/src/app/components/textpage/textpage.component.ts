import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../test-service.service';
import { response } from 'express';
@Component({
  selector: 'app-textpage',
  templateUrl: './textpage.component.html',
  styleUrl: './textpage.component.css'
})



export class TextpageComponent implements OnInit{

  data:any;
  prod:any;
  ngOnInit(): void {


    this.items.getitems().subscribe((response:any)=>{
      console.log(response);
      this.data=response.recipes;
      console.log("api data",this.data);
    });

  }
  constructor (private items:TestServiceService) {


  }

}
