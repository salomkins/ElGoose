import { Component, OnInit } from '@angular/core';

export class patnersList {
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
  partner: patnersList = {
    countryCode : 'LV',
    regNr : '40123456789',
    name : 'KUKU SIA'
  }

  constructor() { }

  ngOnInit() {
  }

}
