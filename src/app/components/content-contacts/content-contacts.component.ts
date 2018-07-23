import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-contacts',
  templateUrl: './content-contacts.component.html',
  styleUrls: ['./content-contacts.component.scss']
})
export class ContentContactsComponent implements OnInit {
  public formType = 'md';
  constructor() { }

  ngOnInit() {
  }

}
