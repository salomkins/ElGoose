import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CakeType} from "./cake/cake.type";
import {CakeService} from "./cake/cake.service";

@Component({
  selector: 'app-test-page-3',
  templateUrl: './test-page-3.component.html',
  styleUrls: ['./test-page-3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CakeService
  ]
})
export class TestPage3Component implements OnInit {
  private _cakes: CakeType[] = [];
  constructor(private cakeService: CakeService) { }

  ngOnInit() {
      this.cakes = this.cakeService.getCakes();
  }

  get cakes(): CakeType[] {
    return this._cakes;
  }

  set cakes(value: CakeType[]) {
    this._cakes = value;
  }

}
