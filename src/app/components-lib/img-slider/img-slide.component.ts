import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ImgSlide} from "./img.slide";

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgSlideComponent implements OnInit {
  private _slide: ImgSlide = null;
  private _isActive = false;
  constructor() { }

  ngOnInit() {
  }

  get slide(): ImgSlide {
    return this._slide;
  }

  @Input('slide')
  set slide(value: ImgSlide) {
    this._slide = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  @Input('isActive')
  set isActive(value: boolean) {
    this._isActive = value;
  }
}
