import { Component, OnInit } from '@angular/core';

export class partnersItem {
  countryCode: string;
  regNr: string;
  name: string;
}

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss']
})

export class PartnersListComponent implements OnInit {
  listName = 'Partneru saraksts';
  myPartners = myPartnersList;

  activeItem: partnersItem;
  clickItem(item: partnersItem){
    this.activeItem = item;
  }
  constructor() { }

  ngOnInit() {
  }
}

var myPartnersList: partnersItem[] = [
    {countryCode : 'LV',
    regNr : '40123456789',
    name : 'KUKU SIA'},
    {countryCode : 'LV',
    regNr : '40111111111',
    name : 'AAA SIA'},
    {countryCode : 'LV',
    regNr : '40222222222',
    name : 'BBB SIA'},
    {countryCode : 'LV',
    regNr : '40333333333',
    name : 'CCC SIA'},
    {countryCode : 'RU',
    regNr : '40444444444',
    name : 'DDD SIA'},
];
