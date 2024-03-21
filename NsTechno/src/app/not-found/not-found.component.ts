import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{

// one:number=0;
// onestop:any = setInterval(()=>{
//   this.one++;
//   if(this.one==10) {
//     clearInterval(this.onestop);
//   }
// },30)

proddata:any;
prod: any;
constructor(private prodget:BackendApiService){

}
ngOnInit(): void {

  this.prodget.getdata().subscribe((responce:any)=>{
    console.log(responce);
    this.proddata=responce.products;
    console.log("any data ::::::" ,this.proddata);
  })

}



}
