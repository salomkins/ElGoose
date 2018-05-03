import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class PopcornService {
  titlesChanged: Subject<string> = new Subject();

  private _iks = 0;
  private _titles: string[] = [];

  constructor() { }

  get iks(): number {
    return this._iks;
  }

  set iks(value: number) {
    this._iks = value;
  }

  increment() {
    this.iks++;
  }

  getTitles(): string[] {
    return this.titles.slice();
  }

  addTitle(title: string) {
    this.titles.push(title);
    this.titlesChanged.next(title);
  }
  private get titles(): string[] {
    return this._titles;
  }

  private set titles(value: string[]) {
    this._titles = value;
  }
}
