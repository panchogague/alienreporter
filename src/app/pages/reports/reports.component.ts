import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Report } from '../../models/report.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styles: []
})
export class ReportsComponent implements OnInit {

  reporter:Report;
  constructor(private reportService:ReportService) { }

  ngOnInit() {
    this.reportService.getReporters().subscribe((resp:Report)=>{
      this.reporter=resp;
      console.log(this.reporter);
    }
    );
  }

}
