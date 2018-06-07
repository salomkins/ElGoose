import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  list: {
    iconName: string;
    caption: string;
    text: string;
  }[][];

  constructor() { }

  ngOnInit() {

    this.list = [
      [
        {
          iconName: 'fa-asterisk',
          caption: 'Vestibulum elementum tempus eleifend',
          text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna. Suspendisse commodo tempor sagittis! In justo est sollicitudin.'
        },
        {
          iconName: 'fa-asterisk',
          caption: 'Congue dui ut porta aenean laoreet',
          text: 'Pellentesque vitae tortor id neque fermentum pretium. Maecenas ac lacus ut neque rhoncus laoreet sed id tellus.'
        },
        {
          iconName: 'fa-asterisk',
          caption: 'Aenean laoreet viverra turpis a com',
          text: 'Maecenas ac lacus ut neque rhoncus laoreet sed id tellus. Donec justo tellus, tincidunt vitae pellentesque nec, pharetra a orci. Praesent'
        },
      ],
      [
        {
          iconName: 'fa-asterisk',
          caption: 'Tempus eleifend cum sociis natoque',
          text: 'Labore et dolore magna. Suspendisse commodo tempor sagittis! In justo est sollicitudin eu scelerisque pretium, placerat eget elit.'
        },
        {
          iconName: 'icon fa-trophy',
          caption: 'Sociis natoque penatibus vestibulum',
          text: 'Suspendisse commodo tempor sagittis! In justo est sollicitudin eu scelerisque pretium, placerat eget elit. Praesent faucibus rutrum.'
        },
        {
          iconName: 'icon fa-trophy',
          caption: 'Penatibus vestibulum congue dui ut',
          text: 'In justo est sollicitudin eu scelerisque pretium, placerat eget elit. Praesent faucibus rutrum odio at rhoncus.'
        },
      ],
    ]
  }

}
