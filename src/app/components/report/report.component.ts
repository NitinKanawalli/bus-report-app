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
    this.getDataFromReportService();
  }

  // tslint:disable-next-line: typedef
  getDataFromReportService() {
    return this.reportService.readData().subscribe((source) => this.reports = source.data);
  }

  getCurrentDate(): string {
    this.date = moment().format('MMM Do YY');
    return this.date;
  }

  writeNotesToLocalStorage(forOrg, index): void {
    const textNotes = (document.getElementById('saveNotes' + index) as HTMLInputElement).value;
    localStorage.setItem(forOrg, textNotes);
  }

  readFromLocalStorage(fromOrg): any {
    return localStorage.getItem(fromOrg);
  }

  showHide(ind): void {
    const x = document.getElementById('showHide' + ind);
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

}
