import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well1',
  templateUrl: './well1.component.html',
  styleUrls: ['./well1.component.scss']
})
export class Well1Component implements OnInit {
  list: [
    { name: string, link: string }
  ];
  constructor() { }

  ngOnInit() {
    this.list = [
      { name: 'Lorem ipsum dolor sit amet', link: '' },
      { name: 'Conse ctetur adipisicing', link: '' },
      { name: 'Elit sed do eiusmod tempor', link: '' },
      { name: 'Incididunt ut labore', link: '' },
      { name: 'Et dolore magna aliqua', link: '' },
      { name: 'Ut enim ad minim veniam', link: '' },
      { name: 'Quis nostrud exercitation', link: '' },
      { name: 'Incididunt ut labore', link: '' },
      { name: 'My test page', link: '/test' },
    ]
  }

}
