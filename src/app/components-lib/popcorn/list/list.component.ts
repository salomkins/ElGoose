import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-popcorn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Output() listChanged = new EventEmitter<void>();

  private iks = false;

  private _titles: string[] = [];
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  get titles(): string[] {
    return this._titles;
  }

  @Input('titles')
  set titles(value: string[]) {
    this._titles = value;
    console.log(this.titles);
    if (this.titles && this.titles.length) {
      this.listChanged.emit();
    }
  }

  getIks() {
    console.log('parbaudam iksu', this.iks);
    return this.iks;
  }

  toggleIks() {
    setTimeout(() => {
      this.iks = !this.iks;
      this.changeDetector.detectChanges();
    }, 2000);
  }
}
