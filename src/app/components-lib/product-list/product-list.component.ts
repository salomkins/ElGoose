import { Component, OnInit, Input } from '@angular/core';

export class listItem {
  iconName: string;
  caption: string;
  link?: string;
  text: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private _style: string;
//style="bg-primary";

  private _list: listItem[];

  constructor() { }

  ngOnInit() {
  }

  @Input('style')
  set style(value: string) {
    this._style = value;
  }
  get style(): string {
    return this._style;
  }

  @Input('list')
  set item(value: listItem[]) {
    this._list = value;
  }
  get list(): listItem[] {
    return this._list;
  }

}
