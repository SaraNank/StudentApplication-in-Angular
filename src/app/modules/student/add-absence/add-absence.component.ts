import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../models/student.model';
import { AbsenceDays } from '../../../models/absenceDays.model';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  
})
export class AddAbsenceComponent {
@Input()
student!:Student;

absence: AbsenceDays = new AbsenceDays();
@Output()
onAddAbsence:EventEmitter<AbsenceDays>=new EventEmitter();
addAbsence(){
  if (this.student) {
    const absenceData = { date: this.absence.date, sumOfAbsenceDays: this.absence.sumOfAbsenceDays };
    console.log("date="+this.absence?.date);
    console.log("days="+this.absence?.sumOfAbsenceDays);
    this.onAddAbsence.emit(absenceData);
  }
}
}
