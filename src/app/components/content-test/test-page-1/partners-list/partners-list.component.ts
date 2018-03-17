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
  newItem: partnersItem;

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
    this.newItem=this.clearItem();
    this.editItem = this.newItem;}
    else {this.editItem = item;}
  }

  clearItem(): partnersItem {
      return {
      id: null,
      countryCode: '',
      regNr: '',
      name: ''
    };
  }

  deleteItem(e) {
    if (this.myPartners.indexOf(this.editItem) > -1){
       this.myPartners.splice(this.myPartners.indexOf(this.editItem), 1);}
    this.newItem=this.clearItem();
    this.editItem = this.newItem;
  }

  constructor(private _PartnersService: PartnersService) { }

  ngOnInit() {
    this.getPartners();
    this.newItem=this.clearItem();
    this.editItem = this.newItem;
  }
}
