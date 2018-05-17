import {Injectable} from '@angular/core';
import {CakeType} from "./cake.type";
import {CakesData} from "./cakes.data";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class CakeService {
  private cakes: CakeType[] = [];

  constructor() {
    this.cakes = CakesData;
  }


  getCakes(): Observable<CakeType[]> {
    // return of(this.cakes.slice());
    return new Observable<CakeType[]>((observer) => {
      setTimeout(() => {
        observer.next(this.cakes.slice());
      }, 1000);
    });
  }
}
