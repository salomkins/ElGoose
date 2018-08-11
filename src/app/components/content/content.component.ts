import {Component, OnInit} from '@angular/core';
import {ImgSlide} from "../../components-lib/img-slider/img.slide";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private _slides: ImgSlide[] = [];

  constructor() {
  }

  ngOnInit() {
    this.slides = [
      {
        src: '/assets/components/content/assets/page-1_slide01.jpg',
        title: 'Helping with any of your business needs!',
      },
      {
        src: '/assets/components/content/assets/page-1_slide02.jpg',
        title: 'The best strategies to attract new business',
      },
      {
        src: '/assets/components/content/assets/page-1_slide03.jpg',
        title: 'A wide range of global business information',
      },
      {
        title: 'Tikai teksts bez bildes!',
      },
    ];
  }

  get slides(): ImgSlide[] {
    return this._slides;
  }
  set slides(value: ImgSlide[]) {
    this._slides = value;
  }
}
