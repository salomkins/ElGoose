import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {
  list: [
    { name: string, link: string }
  ];
  constructor() { }

  ngOnInit() {
    this.list = [
      { name: 'Ultrices posuere cubilia Curae', link: '' },
      { name: 'Suspendisse sollicitudin velit sed leo', link: '' },
      { name: 'Ut pharetra augue nec augue', link: '' },
      { name: 'Nam elit agna endrerit sit amet', link: '' },
      { name: 'Tincidunt ac viverra sed nulla', link: '' },
      { name: 'Donec porta diam eu massa dapibus', link: '' },
      { name: 'Quisque diam lorem nterdum vitae ac', link: '' },
    ]
  }

}
