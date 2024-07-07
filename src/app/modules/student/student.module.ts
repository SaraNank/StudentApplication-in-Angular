import { NgModule } from "@angular/core";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentdetalisComponent } from "./studentdetalis/studentdetalis.component";
import { ExamListComponent } from "./exam-list/exam-list.component";
import { AddAbsenceComponent } from "./add-absence/add-absence.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExamService } from "./services/exam.service";
import { StudentService } from "./services/student.service";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[ StudentListComponent, StudentdetalisComponent, ExamListComponent, AddAbsenceComponent],
    imports:[CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule,RouterModule],
    providers:[StudentService,ExamService],
    exports:[StudentListComponent,ExamListComponent]
})

export class StudentModule{

}