import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {

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
          iconName: 'fa-comments',
          caption: 'Incididunt ut labore et dolore',
          link: '',
          text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.'
        },
        {
          iconName: 'fa-calendar-o',
          caption: 'Incididunt ut labore et dolore',
          link: '',
          text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.'
        },
      ],
      [
        {
          iconName: 'fa-group',
          caption: 'Incididunt ut labore et dolore',
          link: '',
          text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.'
        },
        {
          iconName: 'fa-thumbs-up',
          caption: 'Incididunt ut labore et dolore',
          link: '',
          text: 'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.'
        },
      ],
    ]
  }
}
