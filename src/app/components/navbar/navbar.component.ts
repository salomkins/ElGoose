import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: { name: string, link: string }[];
  isStuck: boolean = false;

  constructor(public el: ElementRef) { }

  kuku() {
    alert(this.el.nativeElement.offsetTop);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    this.isStuck = scrollPosition >= componentPosition;
  }

  ngOnInit() {
    this.navItems =
      [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "FAQS", link: "/faqs" },
        { name: "Contacts", link: "/contacts" },
        { name: "Test", link: "/test" },
      ];
  }
}
