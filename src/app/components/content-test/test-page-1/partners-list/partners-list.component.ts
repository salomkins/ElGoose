import { Component, OnInit } from '@angular/core';
import { partnersItem } from '../data/partners-item';
import { PartnersService } from '../data/partners.service';
import { mf } from '../../../../components-lib/my-functions/mf.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
})

export class PartnersListComponent implements OnInit {
  myPartners: partnersItem[];
  err: number = 0;

  kuku() {
    this.ff.m('kuku');
  }

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
    private ff: mf
  ) { }

  ngOnInit() {
    this.myPartners = this._PartnersService.getPartners();
    this.editItem = this.clearItem();
    this.activeItem = null;
  }
}
