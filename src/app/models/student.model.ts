import { AbsenceDays } from "./absenceDays.model";

export class Student{
    id:number;
    firstName?:string;
    secondName?:string;
    address?:string;
    email?:string;
    phone?:string;
    avgMarks?:number;
    active:boolean=true;
    departureDate?:Date;
    korsId?:number;
    year?:Year;
    absenceDays!:AbsenceDays[];
    sumOfAbsence:number=0;
    constructor(firstName: string,secondName:string)  {
        this.id = 0;
        this.firstName = firstName;
        this.secondName=secondName;
        this.absenceDays=[];
    }
}
export enum Year{
    firstYear=1,
    secondYear=2,
    thirdYear=3
}