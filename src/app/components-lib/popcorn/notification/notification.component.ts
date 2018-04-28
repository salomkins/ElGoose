import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popcorn-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  isMessageVisible = false;
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
    this.handleMessageAdd();
  }

  private handleMessageAdd() {
    if (this.message) {
      this.showMessage();
    }
  }

  private showMessage() {
    this.isMessageVisible = true;
    setTimeout(() => {
      this.hideMessage();
    }, 3000);
  }
  private hideMessage () {
    this.isMessageVisible = false;
  }
}
