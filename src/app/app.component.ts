import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) {
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(this.handleRouteChange);
  }

  handleRouteChange(event) {
    // check if url has hash
    const hasLocation = event.urlAfterRedirects.search('#');
    if ( hasLocation > -1) {
      // find el with hash and scroll to it
      const id = event.urlAfterRedirects.substring(hasLocation + 1);
      if (id) {
        const element = document.querySelector(`#${id}`);
        const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
        //console.log(y, element.getBoundingClientRect().top , window.pageYOffset)
        if (element) {
          window.scrollTo({behavior: 'smooth', top: y, left: 0});
          return;
        }
      }
    }
    window.scrollTo({behavior: 'smooth', top: 0, left: 0});
  }
}
