import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

export class navItem {
  name: string;
  link: string;
  subMenu?: {
    name: string;
    link: string;
  }[];
  subMenuActive?: boolean
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  navItems: navItem[];
  hoverItem: navItem;
  activeItem: navItem;
  isStuck: boolean = false;
  navBar: string;
  subMenuBar: string;

  constructor(public el: ElementRef) { }



  sm_subMenuClick(item: navItem) {
    if (item.subMenu) item.subMenuActive = !item.subMenuActive;
  }

  navBarClick() {
    if (this.navBar === 'fa-bars') {
      this.navBar = 'fa-arrow-down';
    } else {
      this.navBar = 'fa-bars';
    }
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
        {
          name: "About", link: "/about",
          subMenu: [
            { name: "Quick facts", link: "/about" },
            { name: "Who we are", link: "/about" },
            { name: "Our awards", link: "/about" },
          ]
        },
        {
          name: "Services", link: "/services",
          subMenu: [
            { name: "The best business services", link: "/services" },
            { name: "How we can help?", link: "/services" },
            { name: "Price list", link: "/services" },
          ]
        },
        { name: "FAQS", link: "/faqs" },
        { name: "Contacts", link: "/contacts" },
        { name: "Test", link: "/test" },
      ];
    this.activeItem = this.navItems[0];
    this.navBar = 'fa-bars';
    this.subMenuBar = 'fa-angle-down';
  }
}
