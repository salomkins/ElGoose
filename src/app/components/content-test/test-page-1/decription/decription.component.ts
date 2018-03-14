import { Component, OnInit, Input } from '@angular/core';
import { partnersItem } from '../data/partners-item';

@Component({
  selector: 'app-decription',
  templateUrl: './decription.component.html',
  styleUrls: ['./decription.component.scss']
})
export class DecriptionComponent implements OnInit {

  private _descrItem: partnersItem;

  constructor() { }

  ngOnInit() {
  }


  @Input('descrItem')
  set descrItem(value: partnersItem) {
    this._descrItem = value;
  }
  get descrItem(): partnersItem {
    return this._descrItem;
  }

}
