import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  list: {
    iconName: string;
    caption: string;
    link: string;
    text: string;
  }[][];

  constructor() { }

  ngOnInit() {
    this.list = [
      [
        {
          iconName: 'fa-star',
          caption: 'Lorem ipsum dolor sit amet',
          link: '',
          text: 'Aliquam a odio arcu. Morbi a dignissim nisl? Aenean aliquet magna in nulla congue vehicula. Morbi dignissim tristique.'
        },
        {
          iconName: 'fa-envelope',
          caption: 'Dolor sit amet conse ctetur',
          link: '',
          text: 'Morbi dignissim tristique turpis sed sodales. In tincidunt dapibus semper. Nullam non orci eu massa tempus aliquam!'
        },
      ],
      [
        {
          iconName: 'fa-laptop',
          caption: 'Ut enim ad minim veniam',
          link: '',
          text: 'Quisque placerat metus at neque aliquam sit amet iaculis lacus iaculis. Etiam ultrices condimentum justo eu viverra.'
        },
        {
          iconName: 'fa-cogs',
          caption: 'Exercitation ullamco laboris nisi',
          link: '',
          text: 'Curabitur lacinia tristique imperdiet. Aenean bibendum vehicula diam nec placerat. Donec lectus leo, consequat sit amet viverra.'
        },
      ],
    ]
  }

}
