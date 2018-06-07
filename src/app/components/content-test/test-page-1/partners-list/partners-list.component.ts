import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { partnersItem } from '../data/partners-item';
import { PartnersService } from '../data/partners.service';
//import { mf } from '../../../../components-lib/my-functions/mf.service';

import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PartnersListComponent implements OnInit {
  myPartners: partnersItem[];
  private getPartnersSubscription: Subscription;

  err: number = 0;

  activeItem: partnersItem;
  readActiveItem(item: partnersItem) {
    this.activeItem = item;
  }

  editItem: partnersItem;
  readEditItem(item: partnersItem) {
    this.err = 0;
    if (this.editItem === item) {
      this.editItem = this.clearItem();
    }
    else { this.editItem = item; }
  }

  clearItem(): partnersItem {
    return {
      id: null,
      countryCode: '',
      regNr: '',
      name: ''
    };
  }

  addItem(e) {
    this.err = this._PartnersService.addPartner(e, this.activeItem);
  }

  cancel(e) {
    this.readEditItem(this.editItem);
  }

  deleteItem(e) {
    this._PartnersService.deletePartner(this.editItem);
    this.editItem = this.clearItem();
  }

  okItem(e) {
    this.err = this._PartnersService.editPartner(this.editItem, e);
  }

  constructor(
    private _PartnersService: PartnersService,
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
    this.editItem = this.clearItem();
    this.activeItem = null;
  }

    ngOnDestroy() {
      this.getPartnersSubscription.unsubscribe();
    }

}
