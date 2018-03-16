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
  newItem: partnersItem = {
    id: null,
    countryCode: '',
    regNr: '',
    name: ''
  };

  getPartners(){
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
    if (this.editItem === item){
    this.clearEditItem();}
    else {this.editItem = item;}
  }

  clearEditItem() {
    this.newItem = {
      id: null,
      countryCode: '',
      regNr: '',
      name: ''
    };
    this.editItem = this.newItem;
  }

  constructor(private _PartnersService: PartnersService) { }

  ngOnInit() {
    this.getPartners();
    this.editItem = this.newItem
  }
}
