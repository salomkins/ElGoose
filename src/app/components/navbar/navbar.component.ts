import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';

export class navItem {
  name: string;
  link: string;
  fragment?: string;
  subMenu?: {
    name: string;
    link: string;
    fragment?: string;
  }[];
  subMenuActive?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {

  navItems: navItem[];
  hoverItem: navItem;
  activeItem: navItem;
  isStuck: boolean = false;
  isStuckOn: boolean = false;
  navBar: string;
  subMenuBar: string;

  navbarTimer: any = null;

  constructor(public el: ElementRef) {
    this.checkScroll = this.checkScroll.bind(this);
  }



  sm_subMenuClick(item: navItem) {
    if (item.subMenu) item.subMenuActive = !item.subMenuActive;
  }

  navBarClick() {
    if (this.navBar === 'fa-bars') {
      this.navBar = 'fa-arrow-right';
    } else {
      this.navBar = 'fa-bars';
    }
  }


  // @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    this.isStuckOn = this.isStuck;
    if((!this.isStuck && scrollPosition - 60 >= componentPosition) ||
    (this.isStuck && scrollPosition - 25 < componentPosition)){
      this.isStuck = !this.isStuck;
      if (!this.isStuck) this.isStuckOn = this.isStuck;
      //setTimeout(()=>{this.isStuckOn = this.isStuck;}, 0);
      //pajautāt par ng-click-outside !!!
    }
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
            { name: "The best business services", link: "/services", fragment: 'best-services' },
            { name: "How we can help?", link: "/services", fragment: 'how-to-help' },
            { name: "Price list", link: "/services", fragment: 'price-list' },
          ]
        },
        { name: "FAQS", link: "/faqs" },
        { name: "Contacts", link: "/contacts" },
        { name: "Test", link: "/test" },
      ];
    this.activeItem = this.navItems[0];
    this.navBar = 'fa-bars';
    this.subMenuBar = 'fa-angle-down';

    this.navbarTimer = setInterval(this.checkScroll, 16);
  }

  ngOnDestroy() {
    clearInterval(this.navbarTimer);
  }
}
