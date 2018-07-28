import { Component, OnInit } from '@angular/core';
import { Report } from '../../../models/report.model';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../../../services/report.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: []
})
export class ReportComponent implements OnInit {

  report:Report;
  title:string;
  constructor(private activatedRoute:ActivatedRoute, private reportService:ReportService) {
    this.activatedRoute.params.subscribe(params=>{
      let formId= params['id'];
      this.title=formId;
      //simulate getReporterById method
      this.reportService.getReporters().subscribe((resp:Report)=> this.report=resp);
    })
   }

  ngOnInit() {
  }

  
}
