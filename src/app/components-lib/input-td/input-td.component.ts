import { Component, OnInit, Input } from '@angular/core';

export class v {
  required: boolean;
  email: boolean;
  phone: boolean;
}

@Component({
  selector: 'app-input-td',
  templateUrl: './input-td.component.html',
  styleUrls: ['./input-td.component.scss']
})

export class InputTdComponent implements OnInit {

  private _valid: v = {
    required: false,
    email: false,
    phone: false
  };

  private _type = 'text';
  private _name = '';
  private _placeholder = '';
  private _valueTD = '';
  private _pattern: string;



  constructor() { }

  ngOnInit() {
    if (this._valid.phone) {
      const re = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
      this._pattern = re.toString();
      //this._pattern = "^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$";
    }
  }

  @Input('valid')
  set valid(value: v) {
    this._valid = value;
  }
  get valid(): v {
    return this._valid;
  }

  @Input('type')
  set type(value: string) {
    this._type = value;
  }
  get type(): string {
    return this._type;
  }

  @Input('name')
  set name(value: string) {
    this._name = value;
  }
  get name(): string {
    return this._name;
  }

  @Input('placeholder')
  set placeholder(value: string) {
    this._placeholder = value;
  }
  get placeholder(): string {
    return this._placeholder;
  }

  @Input('valueTD')
  set valueTD(value: string) {
    this._valueTD = value;
  }
  get valueTD(): string {
    return this._valueTD;
  }
  @Input('pattern')
  set pattern(value: string) {
    this._pattern = value;
  }
  get pattern(): string {
    return this._pattern;
  }
}
