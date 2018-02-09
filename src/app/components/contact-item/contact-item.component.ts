import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  private _iconName = '';

  constructor() { }

  ngOnInit() { }

  get iconName(): string {
    return this._iconName;
  }

  @Input('iconName')
  set iconName(value: string) {
    this._iconName = value;
  }

}
