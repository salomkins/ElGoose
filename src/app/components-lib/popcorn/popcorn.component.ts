import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopcornService} from "./popcorn.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-popcorn',
  templateUrl: './popcorn.component.html',
  styleUrls: ['./popcorn.component.scss'],
  providers: [ PopcornService ]
})
export class PopcornComponent implements OnInit, OnDestroy {
  message = '';
  private _titles: string[] = [];
  private titlesSubscription: Subscription;

  constructor( private popcornService: PopcornService) { }

  ngOnInit() {
    this.updateTitles();
    this.titlesSubscription = this.popcornService.titlesChanged.subscribe((title) => {
      this.handleListChanged(title);
    });
  }
  ngOnDestroy() {
    this.titlesSubscription.unsubscribe();
  }


  get titles(): string[] {
    return this._titles;
  }

  set titles(value: string[]) {
    this._titles = value;
  }

  handleTitleAdd(title: string) {
    this.popcornService.addTitle(title);
  }

  handleListChanged(title: string) {
    this.updateTitles();
    this.showMessage(`Pievienojam ${title} elementu`);
  }

  showMessage(messageText: string) {
    this.message = messageText;
    setTimeout(()=> {
      this.hideMessage();
    }, 2000);
  }
  hideMessage(): void {
    this.message = '';
  }

  getPopcorn(): number {
    return this.popcornService.iks;
  }

  addPopcorn() {
    this.popcornService.increment();
  }

  private updateTitles() {
    this.titles = this.popcornService.getTitles();
  }
}
