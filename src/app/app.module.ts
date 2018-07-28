import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//Pages
import { ReportsComponent } from './pages/reports/reports.component';
import { ReportComponent } from './pages/reports/report/report.component';

//Component
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


//Service
import { ReportService } from './services/report.service';

//Routes
import { APP_ROUTES } from './app.routes';

//External components
import {DndModule} from 'ng2-dnd';




@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent, NavbarComponent, FooterComponent, ReportComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,HttpClientModule, DndModule.forRoot()
  ],
  
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
