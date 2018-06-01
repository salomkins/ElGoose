import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  private _btnStyle = 'btn';
  private _type = '';
  private _link = '';

  constructor() { }

  ngOnInit() {
  }

  @Input('btnStyle')
  set btnStyle(value: string) {
    this._btnStyle = value;
  }
  get btnStyle(): string {
    return this._btnStyle;
  }

  @Input('type')
  set type(value: string) {
    this._type = value;
  }
  get type(): string {
    return this._type;
  }

  @Input('link')
  set link(value: string) {
    this._link = value;
  }
  get link(): string {
    return this._link;
  }

}
