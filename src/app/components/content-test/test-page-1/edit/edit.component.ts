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

  clone(obj) {
      if (null == obj || "object" != typeof obj) return obj;
      var copy = obj.constructor();
      for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }
      return copy;
  }

  cancel() {
    this.onCancel.emit(true);
  }

  deleteItem() {
    this.onDeleteItem.emit(true);
  }

  okItem() {
    this.onOkItem.emit(this._item);
  }

  addItem() {
    this.onAddItem.emit(this._item);
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
    this._item = this.clone(value);
  }
  get item(): partnersItem {
    return this._item;
  }

  @Output() onAddItem = new EventEmitter<partnersItem>();
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onDeleteItem = new EventEmitter<boolean>();
  @Output() onOkItem = new EventEmitter<partnersItem>();

}
