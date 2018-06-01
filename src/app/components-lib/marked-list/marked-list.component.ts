import { Component, OnInit, Input } from '@angular/core';

export class listItem {
  name: string;
  link: string
}

@Component({
  selector: 'app-marked-list',
  templateUrl: './marked-list.component.html',
  styleUrls: ['./marked-list.component.scss']
})
export class MarkedListComponent implements OnInit {

  private _list: listItem[];

  constructor() { }

  ngOnInit() {
  }

  @Input('list')
  set item(value: listItem[]) {
    this._list = value;
  }
  get list(): listItem[] {
    return this._list;
  }

}
