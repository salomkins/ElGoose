import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ImgSlide } from './img.slide';


@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgSliderComponent implements OnInit {
  private _slides: ImgSlide[] = [];
  private _activeSlide: ImgSlide = null;
  private _xxx: string = 'default value';

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    setInterval(() => {
      this.setSlideActive(this.nextSlide);
      this.changeDetector.detectChanges();
    }, 5000);
  }


  get xxx(): string {
    return this._xxx;
  }

  @Input('xxx')
  set xxx(value: string) {
    this._xxx = value;
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
}
