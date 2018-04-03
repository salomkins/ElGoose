import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

navItems: { name: string, link: string }[];

  constructor( ) { }

  ngOnInit() {
    this.navItems =
    [
      {name: "Home", link: "/home"},
      {name: "About", link: "/about"},
      {name: "Services", link: "/services"},
      {name: "FAQS", link: "/faqs"},
      {name: "Contacts", link: "/contacts"},
      {name: "Test", link: "/test"},
    ];
  }
}
