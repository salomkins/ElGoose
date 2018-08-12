import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit,  OnDestroy } from '@angular/core';
import { ImgSlide } from './img.slide';


@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgSliderComponent implements OnInit, OnDestroy {
  private _slides: ImgSlide[] = [];
  private _activeSlide: ImgSlide = null;
  private _autoChangeSeconds: string | number = 0;

  private  autoChangeTimer: any = null;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (+this.autoChangeSeconds >= 1) {
    this.autoChangeTimer =  setInterval(() => {
        this.setSlideActive(this.nextSlide);
        this.changeDetector.detectChanges();
      }, +this.autoChangeSeconds * 1000);
    }
  }


  get autoChangeSeconds(): string | number {
    return this._autoChangeSeconds;
  }

  @Input('autoChangeSeconds')
  set autoChangeSeconds(value: string | number) {
    this._autoChangeSeconds = value;
  }

  get slides(): ImgSlide[] {
    return this._slides;
  }

  @Input('slides')
  set slides(value: ImgSlide[]) {
    this._slides = value;
    this.handleSlidesChange();
  }

  get activeSlide(): ImgSlide {
    return this._activeSlide;
  }

  @Input('activeSlide')
  set activeSlide(value: ImgSlide) {
    this._activeSlide = value;
  }

  get nextSlide(): ImgSlide | null {
    const currentSlideIndex = this.slides.findIndex(slide => slide === this.activeSlide);
    if (currentSlideIndex > -1) {
      if (currentSlideIndex === this.slides.length - 1) {
        return this.slides[0];
      } else {
        return this.slides[currentSlideIndex + 1];
      }
    }
    return null;
  }

  get prevSlide(): ImgSlide | null {
    const currentSlideIndex = this.slides.findIndex(slide => {
      return slide === this.activeSlide;
    });
    if (currentSlideIndex > -1) {
      if (currentSlideIndex === 0) {
        return this.slides[this.slides.length - 1];
      } else {
        return this.slides[currentSlideIndex - 1];
      }
    }
    return null;
  }

  setSlideActive(slide: ImgSlide): void {
    if (!slide && this.slides.length) {
      this.activeSlide = this.slides[0];
    }
    if (slide) {
      this.activeSlide = slide;
    }
  }

  private handleSlidesChange() {
    if (!this.activeSlide) {
      this.setSlideActive(null); // jo ta pati parbaude jau ir ieks setSlideActive()
    }
  }

  ngOnDestroy() {
    clearInterval(this.autoChangeTimer);
  }
}
