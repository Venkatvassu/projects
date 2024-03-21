import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-cont5',
  templateUrl: './cont5.component.html',
  styleUrl: './cont5.component.css'
})
export class Cont5Component {

  constructor(){}
  ngonint(){
    AOS.init();
  }

}
