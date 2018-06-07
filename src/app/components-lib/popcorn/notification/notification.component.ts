import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popcorn-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  private _message = '';
  constructor() { }

  ngOnInit() {
  }

  get message(): string {
    return this._message;
  }

  @Input('message')
  set message(value: string) {
    this._message = value;
  }
}
