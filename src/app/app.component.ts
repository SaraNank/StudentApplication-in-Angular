import {Component} from '@angular/core'
import { Student } from './models/student.model';
@Component({
    templateUrl:"./app.component.html",
    selector:"my-app-root",
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    title :string ='hello my app';
    time:Date =new Date();
   constructor(){
    this.setTitle();
   }
    private setTitle(){
        if (this.time.getHours() >= 6 && this.time.getHours() < 12) {
            this.title = 'Good Morning';
          } else if(this.time.getHours()>=12&&this.time.getHours()<18){
            this.title = 'Good afternoon';
          }else
            {
            this.title = 'Good Evening';
          }
    }
    selectedStudent!: Student;
    showExam(student:Student){
      this.selectedStudent=student;
    }

    
}