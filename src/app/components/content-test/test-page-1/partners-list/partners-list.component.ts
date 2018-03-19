import { Component, OnInit } from '@angular/core';
import { partnersItem } from '../data/partners-item';
import { PartnersService } from '../data/partners.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
  providers: [PartnersService]
})

export class PartnersListComponent implements OnInit {
  myPartners: partnersItem[];
  //newItem: partnersItem;

  getPartners() {
    this.myPartners = this._PartnersService.getPartners();
  }

  activeItem: partnersItem;
  readActiveItem(item: partnersItem) {
    this.activeItem = item;
  }

  clearActiveItem() {
    this.activeItem = null;
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
    var newItem: partnersItem = {
      id: 777,
      name: e.name,
      countryCode: e.countryCode,
      regNr: e.regNr
    };
    var i = this.myPartners.indexOf(this.activeItem);
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
    var i = this.myPartners.indexOf(this.editItem);
    if (i > -1) {
      this.myPartners.splice(i, 1);
    }
    this.editItem = this.clearItem();;
  }

  okItem(e) {
    this.editItem.name = e.name;
    this.editItem.countryCode = e.countryCode;
    this.editItem.regNr = e.regNr;
  }

  constructor(private _PartnersService: PartnersService) { }

  ngOnInit() {
    this.getPartners();
    this.editItem = this.clearItem();
    this.activeItem = null;
  }
}
