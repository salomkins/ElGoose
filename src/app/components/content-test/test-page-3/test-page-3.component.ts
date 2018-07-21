import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CakeType} from './cake/cake.type';
import {CakeService} from "./cake/cake.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-test-page-3',
  templateUrl: './test-page-3.component.html',
  styleUrls: ['./test-page-3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CakeService
  ]
})

export class TestPage3Component implements OnInit, OnDestroy {
  private _cakes: CakeType[] = [];
  private getCakesSubscription: Subscription;

  constructor(private cakeService: CakeService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getCakesSubscription = this.cakeService.getCakes().subscribe(
      (response) => {
        this.cakes = response;
        this.changeDetector.detectChanges();
      },
      (error) => {
        console.log(error);
        this.cakes = [];
        this.changeDetector.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.getCakesSubscription.unsubscribe();
  }

  get cakes(): CakeType[] {
    return this._cakes;
  }

  set cakes(value: CakeType[]) {
    this._cakes = value;
  }

}
