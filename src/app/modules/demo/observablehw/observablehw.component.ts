import { Component } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { Student } from '../../../models/student.model';
import { StudentService } from '../../student/services/student.service';

@Component({
  selector: 'app-observablehw',
  templateUrl: './observablehw.component.html',

})
export class ObservablehwComponent {
  students:Student[]=[
    //{id:1,firstName:"Sara",secondName:"Cohen",
  // address:"Rabi Akiva",active:true,phone:'0548459691',avgMarks:99,
  // absenceDays:[{date:new Date(20/12/2020),sumOfAbsenceDays:5},
  //             {date:new Date(20/12/2019),sumOfAbsenceDays:1}]},
  // {id:2,firstName:"Leha",secondName:"levi",address:"Rabi Akiva",
  // active:false,phone:'0548459691',avgMarks:98,
  // departureDate:new Date(20/12/2020),
  // absenceDays:[{date:new Date(20/12/2018),sumOfAbsenceDays:3},
  // {date:new Date(20/12/2019),sumOfAbsenceDays:2}]},
  ];
 
  source:Observable<Student>=new Observable((observer)=>{
    for(let student of this.students){
      observer.next(student);
    }
  })

  timerValue!:string;
  timer:Observable<Date>=new Observable((obs)=>{
    setInterval(()=>{
      obs.next(new Date());
    },1000)
  })
  studentlisttoconsole:Observable<Student>=from(this.students).pipe(map(s=>{return s}));
constructor(){
  this.source.subscribe((val)=>{
    console.log(val);
  })
  this.studentlisttoconsole.subscribe((s)=>{
    console.log(s);
  })
  this.timer.subscribe((d)=>{
    this.timerValue=d.toLocaleTimeString();
  })
}
}
