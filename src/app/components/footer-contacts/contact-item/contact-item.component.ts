import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  private _iconName = '';
  private _tag = '';
  private _link = '';
  private _effects = '';

  constructor() { }

  ngOnInit() { }

  get iconName(): string {
    return this._iconName;
  }

  @Input('iconName')
  set iconName(value: string) {
    this._iconName = value;
  }
  get tag(): string {
    return this._tag;
  }

  @Input('tag')
  set tag(value: string) {
    this._tag = value;
  }
  get link(): string {
    return this._link;
  }

  @Input('link')
  set link(value: string) {
    this._link = value;
  }
  get effects(): string {
    return this._effects;
  }

  @Input('effects')
  set effects(value: string) {
    this._effects = value;
  }

}
