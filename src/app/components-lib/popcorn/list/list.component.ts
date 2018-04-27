import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popcorn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() listChanged = new EventEmitter<void>();

  private _titles: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  get titles(): string[] {
    return this._titles;
  }

  @Input('titles')
  set titles(value: string[]) {
    this._titles = value;
    console.log(this.titles.length);
    if (this.titles.length) {
      this.listChanged.emit();
    }
  }
}
