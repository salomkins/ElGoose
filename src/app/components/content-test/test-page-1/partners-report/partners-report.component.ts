import { Component, OnInit } from '@angular/core';
import { partnersItem } from '../data/partners-item';
import { PartnersService } from '../data/partners.service';


@Component({
  selector: 'app-partners-report',
  templateUrl: './partners-report.component.html',
  styleUrls: ['./partners-report.component.scss'],
  providers: [PartnersService],

})
export class PartnersReportComponent implements OnInit {
   myPartners: partnersItem[];

   getPartners(){
     this.myPartners = this._PartnersService.getPartners();
   }

  constructor(private _PartnersService: PartnersService) { }

  ngOnInit() {
    this.getPartners();
  }
}
