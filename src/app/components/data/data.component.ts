import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() busData;
  constructor() { }

  ngOnInit(): void {
  }

  getStatus(deviation): any {
    if (deviation > 200) {
      return 'Late';
    } else if (deviation <= 200 && deviation > 0) {
      return 'On time';
    } else if (deviation < 0) {
      return 'Early';
    } else if (deviation === null) {
      return 'Unknown';
    }
  }

}
