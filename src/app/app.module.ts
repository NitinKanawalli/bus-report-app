import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './components/report/report.component';
import { ReportService } from './services/report.service';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data/data.component';
import { StrongifyNumberPipe } from './strongify-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    DataComponent,
    StrongifyNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
