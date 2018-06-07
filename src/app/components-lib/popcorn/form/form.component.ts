import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popcorn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() titleAdded = new EventEmitter<string>();
  private _title = '';

  constructor() { }

  ngOnInit() {
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  handleFormSubmit() {
    this.titleAdded.emit(this.title);
    this.clear();
  }

  private clear() {
    this.title = '';
  }
}
