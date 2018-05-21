import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { partnersItem } from '../data/partners-item';
import { PartnersService } from '../data/partners.service';

import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-partners-report',
  templateUrl: './partners-report.component.html',
  styleUrls: ['./partners-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class PartnersReportComponent implements OnInit {
  myPartners: partnersItem[];
  private getPartnersSubscription: Subscription;

  constructor( private _PartnersService: PartnersService,
              private changeDetector: ChangeDetectorRef ) { }

  ngOnInit() {
    this.getPartnersSubscription = this._PartnersService.getPartners().subscribe(
      (response) => {
        this.myPartners = response;
        this.changeDetector.detectChanges();
      },
      (error) => {
        console.log(error);
        this.myPartners = null;
        this.changeDetector.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.getPartnersSubscription.unsubscribe();
  }

}
