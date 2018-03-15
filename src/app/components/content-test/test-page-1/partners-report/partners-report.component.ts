import { Component, OnInit } from '@angular/core';
import { partnersItem } from '../data/partners-item';


@Component({
  selector: 'app-partners-report',
  templateUrl: './partners-report.component.html',
  styleUrls: ['./partners-report.component.scss']
})
export class PartnersReportComponent implements OnInit {
   myPartners: partnersItem[];
  constructor() { }

  ngOnInit() {
  }

}
