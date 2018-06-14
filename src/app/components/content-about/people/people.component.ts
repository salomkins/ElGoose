import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from "./people.service";
import {PersonType} from "./personType";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit, OnDestroy {
  people: PersonType[] = [];
  private getPeopleSubscription: Subscription;
  private getMoreSubscription: Subscription;

  constructor(private peopleService: PeopleService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getPeopleSubscription = this.peopleService.getPeople().subscribe(responseData => {
      this.people = responseData;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy() {
    this.getPeopleSubscription.unsubscribe();
    this.unsubscribeGetMore();
  }

  loadMore() {
    this.unsubscribeGetMore();
    this.getMoreSubscription = this.peopleService.getNextPage().subscribe(responseData => {
      this.people = this.people.concat(responseData);
      this.changeDetector.detectChanges();
    });
  }

  private unsubscribeGetMore() {
    if (this.getMoreSubscription) {
      this.getMoreSubscription.unsubscribe();
      this.getMoreSubscription = null;
    }
  }
}
