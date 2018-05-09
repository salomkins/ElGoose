import { Injectable } from '@angular/core';
import {CakeType} from "./cake.type";
import {CakesData} from "./cakes.data";

@Injectable()
export class CakeService {
  private cakes: CakeType[] = [];
  constructor() {
    this.cakes = CakesData;
  }


  getCakes() {
    return this.cakes.slice();
  }
}
