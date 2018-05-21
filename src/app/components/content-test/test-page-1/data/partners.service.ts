import { myPartnersList } from './data-partners';
import { Injectable } from '@angular/core';
import { partnersItem } from './partners-item';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";


@Injectable()
export class PartnersService {
  //myPartners: partnersItem[] = myPartnersList;
private myPartners: partnersItem[] = null;

constructor() {
  this.myPartners = myPartnersList;
}

  // getPartners(): partnersItem[] {
  //   return this.myPartners;
  // }

getPartners(): Observable<partnersItem[]> {
  //return of(this.myPartners);
  //return of(this.myPartners.slice());
  return new Observable<partnersItem[]>((observer) => {
    setTimeout(() => {
      //observer.next(this.myPartners.slice());
      observer.next(this.myPartners);
    }, 1000);
  });
}

  addPartner(additem: { item: partnersItem; add: boolean }, activeItem: partnersItem): number {
    let errN: number = this.validatePartner(additem.item);
    if (!errN) {
      let newItem: partnersItem = {
        id: 777,
        name: additem.item.name,
        countryCode: additem.item.countryCode,
        regNr: additem.item.regNr
      };
      let i = this.myPartners.indexOf(activeItem);
      if (i > -1 && !additem.add) {
        this.myPartners.splice(i, 0, newItem);
      }
      else {
        this.myPartners.push(newItem);
      }
    }
    return errN;
  }

  editPartner(item: partnersItem, newItem: partnersItem): number {
    let errN: number = this.validatePartner(newItem);
    if (!errN) {
      item.name = newItem.name;
      item.countryCode = newItem.countryCode;
      item.regNr = newItem.regNr;
    }
    return errN;
  }

  validatePartner(item: partnersItem): number {
    let errN: number = 0;
    if (item.name.trim() === '') errN = 11;
    return errN;
  }

  deletePartner(item: partnersItem) {
    let i = this.myPartners.indexOf(item);
    if (i > -1) {
      this.myPartners.splice(i, 1);
    }
  }
}
