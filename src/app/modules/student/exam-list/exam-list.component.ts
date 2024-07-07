import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student.model';
import { Exam } from '../../../models/exam.model';
import { ExamService } from '../services/exam.service';
@Component({
    selector: 'app-exam-list',
    templateUrl: './exam-list.component.html',
  })
  export class ExamListComponent{
    private _student?: Student ; 
    private _avgMarkOfStudent?:Number;
    getaAvgMarkOfStudent(){
      return this._avgMarkOfStudent;
    }
    @Input() 
    public set student(value:Student){
      this._student=value;
      this._avgMarkOfStudent=this._examservice.getAvg(this._student.id);
      if (this._student) {
        this.examListOfStudent = this.examList.filter(e => e.studentId == this._student?.id);
      }
    }
    examList: Exam[]=[];
    examListOfStudent: Exam[]=[];
   
   constructor(private _examservice:ExamService){
    
   }
   ngOnInit(){
    this.examList=this._examservice.getExams();
    this.examListOfStudent=this.examList.filter(e=>e.studentId==this._student?.id);
   }
}
  