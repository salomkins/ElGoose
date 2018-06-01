import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { partnersItem } from '../data/partners-item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private _err: number = 0;
  private chk: boolean = true;
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
    let value = {
      item: this._item,
      add: this.chk
    }
    this.onAddItem.emit(value);
  }

changeRBtn(e) {
  let target = e.target;
  if (target.checked && target.value === 'bottom'){
    this.chk = true;
  } else {
    this.chk = false;
  };
}
  constructor() { }

  ngOnInit() {
  }

  @Input('err')
  set err(value: number) {
    this._err = value;
  }
  get err(): number {
    return this._err;
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

  @Output() onAddItem = new EventEmitter<{item: partnersItem; add: boolean}>();
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onDeleteItem = new EventEmitter<boolean>();
  @Output() onOkItem = new EventEmitter<partnersItem>();

}
