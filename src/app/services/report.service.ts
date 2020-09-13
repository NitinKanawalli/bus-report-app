import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private url = '../../assets/data-source/bus-services-data.json';
  constructor(private http: HttpClient) { }

  readData(): Observable<any> {
    return this.http.get(this.url);
  }

}
