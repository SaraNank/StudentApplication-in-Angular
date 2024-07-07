import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Student } from '../../../models/student.model';
import { StudentService } from '../services/student.service';
import { AbsenceDays } from '../../../models/absenceDays.model';
import { Observable, concatMap, filter, from, interval, map, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
 
})
export class StudentListComponent {
  students:Student[]=[];
  studentServer=this._studentService;

  deleteStudentToServer(studentId:number){
    console.log("deleteStudentToServer");
    this._studentService.deleteStudentToServer(studentId).subscribe(data=>{
      if(data){
        alert(studentId+" deleted success");
      }
      this._studentService.getStudentsFromServer().subscribe(data=>{
        this.students=data;
      })
    })
  }

  showStudentActive(active:boolean){
    this.studentServer.getStudentByActive(active).subscribe(data=>{
      this.students=data;
      console.log(this.students);
    })
  }

  sendMail() {
    from(this.students).pipe(
      filter(student => student.active)
    ).subscribe({
      next: (student) => {
        if (student.active) {
         alert("Sending email to " + student.email);
        }
      },
      complete: () => {
               alert("All emails sent."); 
             }
    });
  }

  showDetails(studentId:number){
   this._router.navigate(["/student",studentId]);
  }

  addStudent(){
    this._router.navigate(['/student',0])
   }

  studentToAddAbsence!:Student;
  addAbsence(student:Student){
this.studentToAddAbsence=student;
  }

  AddAbsenceToStudent(absence:AbsenceDays){
    let student= this.students.find(s=>s.id==this.studentToAddAbsence.id);
    if(student!=null){
      student?.absenceDays.push(absence);
      student.sumOfAbsence+=(Number)(absence.sumOfAbsenceDays);
      console.log(student?.absenceDays);
      this._studentService.updateStudentToServer(student);
    }
    
   }
 
  constructor(private _studentService:StudentService,private _router:Router){
    _studentService.getStudentsFromServer().subscribe(data=>{
      this.students=data;
    })
  }


}

