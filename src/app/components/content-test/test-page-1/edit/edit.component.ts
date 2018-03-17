import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { partnersItem } from '../data/partners-item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private _caption: string = "";
  private _item: partnersItem;

  deleteItem() {
    this.onDeleteItem.emit(true);
  }

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

  @Output() onDeleteItem = new EventEmitter<boolean>();
}
