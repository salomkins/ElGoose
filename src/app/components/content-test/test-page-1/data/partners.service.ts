import { myPartnersList } from './data-partners';
import { Injectable } from '@angular/core';
import { partnersItem } from './partners-item';

@Injectable()
export class PartnersService {
  myPartners: partnersItem[] = myPartnersList;

  getPartners(): partnersItem[] {
    return this.myPartners;
  }

  editPartner(item: partnersItem, newItem: partnersItem){
    item.name = newItem.name;
    item.countryCode = newItem.countryCode;
    item.regNr = newItem.regNr;
  }

  deletePartner(item: partnersItem){
    let i = this.myPartners.indexOf(item);
    if (i > -1) {
      this.myPartners.splice(i, 1);
    }
  }
}
