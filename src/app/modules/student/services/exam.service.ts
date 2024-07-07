
import { Injectable } from "@angular/core";

import { Exam } from "../../../models/exam.model";

@Injectable()
export class ExamService{
    getExams(): Exam[]{
        return [ {id:1,date:new Date(2022, 2, 1),description:"Math",studentId:1,mark:90},
        {id:2,date:new Date(2022, 2, 1),description:"Math",studentId:3,mark:92},
        {id:3,date:new Date(2022, 3, 1),description:"English",studentId:3,mark:92},
        {id:4,date:new Date(2022, 3, 1),description:"English",studentId:2,mark:92},]
    }
    getAvg(studentId:Number):Number{
        var count=0,sum=0;
        for(let exam of this.getExams()){
            if(exam.studentId==studentId){
                count++;
                sum+=exam.mark;
            }
        }
        return sum/count;
    }
}