import {AfterContentInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PopcornService} from "./popcorn.service";
import {Subscription} from "rxjs/Subscription";
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-popcorn',
  templateUrl: './popcorn.component.html',
  styleUrls: ['./popcorn.component.scss'],
  providers: [ PopcornService ]
})
export class PopcornComponent implements OnInit, OnDestroy, AfterContentInit {
  message = '';
  private _titles: string[] = [];
  private titlesSubscription: Subscription;
  @ViewChild('tryEventSubscription') formElement: FormComponent;

  constructor( private popcornService: PopcornService) {

    console.log('in constructor', this.formElement);
  }

  ngOnInit() {
    this.updateTitles();
    this.titlesSubscription = this.popcornService.titlesChanged.subscribe((title) => {
      this.handleListChanged(title);
    });
  }
  ngOnDestroy() {
    this.titlesSubscription.unsubscribe();
  }

  ngAfterContentInit() {
    console.log('in ngAfterContentInit', this.formElement);
    this.formElement.titleAdded.subscribe(title => {
      console.log('second title form used', title);
    });
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
