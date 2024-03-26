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


// // src/app/weather.component.ts

// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './api.service';

// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent implements OnInit {
//   public weatherData: any;

//   constructor(private apiService: ApiService) { }

//   ngOnInit(): void {
//     this.fetchWeatherData();
//   }

//   private fetchWeatherData(): void {
//     this.apiService.getWeatherData()
//       .subscribe(
//         (data) => {
//           this.weatherData = data;
//         },
//         (error) => {
//           console.error('Error fetching weather data:', error);
//         }
//       );
//   }
// }
