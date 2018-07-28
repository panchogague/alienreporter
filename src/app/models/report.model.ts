import { FormReport } from "./form-report.model";

export class Report {

    constructor(public userId:number,
                public formId:string,
                public lastChangedDate:Date,
                public lastChangedBy:string,
                public formReport:FormReport[]
                ) {
    }
}