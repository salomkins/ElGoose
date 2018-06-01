import { Component, OnInit, Input } from '@angular/core';
import { partnersItem } from '../data/partners-item';

@Component({
  selector: 'app-decription',
  templateUrl: './decription.component.html',
  styleUrls: ['./decription.component.scss']
})
export class DecriptionComponent implements OnInit {

  private _caption: string = "";
  private _item: partnersItem;

  constructor() { }

  ngOnInit() {
  }


  @Input('caption')
  set caption(value: string) {
    this._caption = value;
  }
  get caption(): string {
    return this._caption;
  }

  @Input('item')
  set item(value: partnersItem) {
    this._item = value;
  }
  get item(): partnersItem {
    return this._item;
  }

}
