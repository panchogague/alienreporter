import { Routes, RouterModule } from "@angular/router";
import { ReportsComponent } from "./pages/reports/reports.component";
import { ReportComponent } from "./pages/reports/report/report.component";
const appRoutes:Routes =[
   
  {path:'', redirectTo:'/reports',pathMatch:'full'}, 
  {path:'reports', component:ReportsComponent},
  {path:'report/:id', component:ReportComponent}
];
export const APP_ROUTES=RouterModule.forRoot(appRoutes,{useHash:true});