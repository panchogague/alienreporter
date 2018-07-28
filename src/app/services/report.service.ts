import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIGURATION_SERVICE } from '../config/config';
@Injectable()
//service to work with reporter back end
export class ReportService {


  constructor(private htpp:HttpClient) { 

  }

  //get all of the reporters from back end
  //return report
  getReporters(){
    return this.htpp.get(CONFIGURATION_SERVICE.UrlService);
  }
}
