import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can-help',
  templateUrl: './can-help.component.html',
  styleUrls: ['./can-help.component.scss']
})
export class CanHelpComponent implements OnInit {

  list1: [
    { name: string, link: string }
  ];
  list2: [
    { name: string, link: string }
  ];

  constructor() { }

  ngOnInit() {
    this.list1 = [
      { name: 'Praesent vestibulum molestie', link: '' },
      { name: 'Aenean nonummy hendrerit', link: '' },
      { name: 'Vivamus eget nibh', link: '' },
      { name: 'Etiam cursus leo vel metus', link: '' },
    ];
    this.list2 = [
      { name: 'Donec in velit vel ipsum auctor', link: '' },
      { name: 'Vestibulum iaculis lacinia est', link: '' },
      { name: 'Proin dictum elementum velit', link: '' },
      { name: 'Fusce euismod consequat ante', link: '' },
    ];

  }

}
