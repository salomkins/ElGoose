import { Component, OnInit } from '@angular/core';
import { mf } from '../../../components-lib/my-functions/mf.service';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {

  kuku() {
    this.ff.m('kuku');
  }

  constructor(private ff: mf) { }

  ngOnInit() {
  }
}
