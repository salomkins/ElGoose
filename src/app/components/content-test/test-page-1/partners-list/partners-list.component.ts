import { Component, OnInit } from '@angular/core';
import { partnersItem } from '../data/partners-item';
import { PartnersService } from '../data/partners.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
})

export class PartnersListComponent implements OnInit {
  myPartners: partnersItem[];

  activeItem: partnersItem;
  readActiveItem(item: partnersItem) {
    this.activeItem = item;
  }

  editItem: partnersItem;
  readEditItem(item: partnersItem) {
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
    let newItem: partnersItem = {
      id: 777,
      name: e.name,
      countryCode: e.countryCode,
      regNr: e.regNr
    };
    let i = this.myPartners.indexOf(this.activeItem);
    if (i > -1) {
      this.myPartners.splice(i, 0, newItem);
    }
    else {
      this.myPartners.push(newItem);
    }
  }

  cancel(e) {
    this.readEditItem(this.editItem);
  }

  deleteItem(e) {
    this._PartnersService.deletePartner(this.editItem);
    this.editItem = this.clearItem();
  }

  okItem(e) {
    this._PartnersService.editPartner(this.editItem, e);
  }

  constructor(private _PartnersService: PartnersService) { }

  ngOnInit() {
    this.myPartners = this._PartnersService.getPartners();
    this.editItem = this.clearItem();
    this.activeItem = null;
  }
}
