import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student, Year } from '../../../models/student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APP_KORS, Kors } from '../../../models/kors.model';
import { AbsenceDays } from '../../../models/absenceDays.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-studentdetalis',
  templateUrl: './studentdetalis.component.html',
})
export class StudentdetalisComponent {
  korsList:Kors[]=APP_KORS;
  year=Year;
  private _student?: Student ; 
  absence!:AbsenceDays;
  studentForm:FormGroup=new FormGroup({});
  studentId?:number;
  public get student() :Student|undefined{
    return this._student;
  }
  
   updateForm() {
    this.studentForm = new FormGroup({
      "firstName": new FormControl(this._student?.firstName, Validators.required),
      "secondName": new FormControl(this._student?.secondName, Validators.required),
      "address": new FormControl(this._student?.address, Validators.required),
      "phone": new FormControl(this._student?.phone, Validators.required),
      "departureDate": new FormControl(this._student?.departureDate),
      "kors": new FormControl(this._student?.korsId, Validators.required),
      "year": new FormControl(this._student?.year),
    });
  }
  
     
  // @Input()
  // public set student(value:Student){
  //   this._student=value;
  //   this.studentForm=new FormGroup({
  //     "firstName":new FormControl(this.student?.firstName,[Validators.required,Validators.minLength(3)]),
  //     "secondName":new FormControl(this.student?.secondName,Validators.required),
  //     "address":new FormControl(this.student?.address,Validators.required),
  //     "phone":new FormControl(this.student?.phone,Validators.required),
  //     "departureDate":new FormControl(this.student?.departureDate,),
  //     "kors":new FormControl(this._student?.korsId,Validators.required),
  //     "year":new FormControl(this._student?.year),
      
  //   })
  // }

  // @Output()
  // onSaveStudent:EventEmitter<Student> = new EventEmitter();

  saveStudent(){
    
    let saveId:number;
    saveId=this._student?.id||0;
     this._student=this.studentForm.value;
     if(this._student){
      this._student.id= saveId;
     }
     if(this._student?.id==0){
      this._studentService.addStudentsToServer(this._student).subscribe(data=>{
        if(data){
           alert("student was added success" +this._student?.firstName+this._student?.secondName);
        }
      })
     }
     if(this._student&&this._student?.id!=0){
      this._studentService.updateStudentToServer(this._student).subscribe(data=>{
        if(data){
           alert("student updates success!");
           
        }
      })
     }
     this._router.navigate(["/students"]);
    //this.onSaveStudent.emit(this.student);
  }
 
  constructor(private _acr:ActivatedRoute,private _studentService :StudentService,private _router:Router){
    
  }
  
  ngOnInit():void{
    this._acr.paramMap.subscribe(paramMap=>{
      if (paramMap) {
        const idParam = paramMap.get("id");
        if (idParam) {
          this.studentId = +idParam;
          console.log( "student id from ngoninit"+this.studentId);
          
          this.fetchStudentById(this.studentId);
        }
      }
    })
  }

newStudent?: boolean;
fetchStudentById(studentId: number) {
  if (studentId == 0) {
    this._student = new Student("", "");
    this.newStudent = true;
    this.updateForm();
  } else {
    this._studentService.getStudentById(studentId).subscribe(data => {
      this._student = data;
      console.log("fetchStudentById " + this._student.id);
      console.log(this._student);
      this.updateForm();
    });
  }
}


}