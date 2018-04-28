import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popcorn',
  templateUrl: './popcorn.component.html',
  styleUrls: ['./popcorn.component.scss']
})
export class PopcornComponent implements OnInit {
  message = '';
  private _titles: string[] = [];

  constructor() { }

  ngOnInit() {
  }


  get titles(): string[] {
    return this._titles;
  }

  set titles(value: string[]) {
    this._titles = value;
  }

  handleTitleAdd(title: string) {
    this.titles.push(title);
  }

  handleListChanged() {
    this.message = 'Izmainijas saraksts';
  }
}
