import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  timerValue!:string;
  timer:Observable<Date>=interval(1000).pipe(map(t=>{return new Date()}));
  constructor(){
    this.timer.subscribe((t)=>{
      this.timerValue=t.toLocaleTimeString();
    })
  }
}
