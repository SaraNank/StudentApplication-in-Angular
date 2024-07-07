
import { Injectable } from "@angular/core";
import { Student } from "../../../models/student.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class StudentService{
  getStudentsFromServer():Observable<Student[]>{
    return this._http.get<Student[]>("/api/student"); 
  }
  getStudentByActive(active: boolean): Observable<Student[]> {
    return this._http.get<Student[]>("/api/student/active?active=" + active); 
  }
  getStudentById(studentId: number): Observable<Student> {
    return this._http.get<Student>("/api/student/" + studentId); 
  }
  addStudentsToServer(newStudent:Student):Observable<boolean>{
    return this._http.post<boolean>("/api/student",newStudent);
  }
  updateStudentToServer(student:Student):Observable<boolean>{
    return this._http.put<boolean>("/api/student/"+student.id,student);
  }
  deleteStudentToServer(studentId: number): Observable<boolean> {
    console.log("deleteStudentToServer from service");
    return this._http.delete<boolean>("/api/student/"+studentId);
}
  constructor(private _http:HttpClient){

  }
}
