import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CakeType} from "./cake.type";

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CakeComponent implements OnInit {
  @Input() cake: CakeType;

  constructor() {}

  ngOnInit() {
  }


}
