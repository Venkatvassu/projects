import { Component } from '@angular/core';

@Component({
  selector: 'app-cont8',
  templateUrl: './cont8.component.html',
  styleUrl: './cont8.component.css'
})
export class Cont8Component {

  one:number=0;
  onestop:any = setInterval(()=>{
    this.one++;
    if(this.one==10) {
      clearInterval(this.onestop);
    }
  },30)

  two:number=0;
  twostop:any = setInterval(()=>{
    this.two++;
    if(this.two==25) {
      clearInterval(this.twostop);
    }
  },30)
}
