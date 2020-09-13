import { Component, OnInit } from '@angular/core';

import * as moment from 'moment-timezone';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reports;
  date: string;
  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.readData().subscribe((source) => this.reports = source.data);
  }

  getCurrentDate(): string {
    this.date = moment().format('MMM Do YY');
    return this.date;
  }

}
