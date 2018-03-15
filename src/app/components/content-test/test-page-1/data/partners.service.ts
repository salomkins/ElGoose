import { myPartnersList } from './data-partners';
import { Injectable } from '@angular/core';

@Injectable()
export class PartnersService {
  getPartners(){
    return myPartnersList;
  }
}
