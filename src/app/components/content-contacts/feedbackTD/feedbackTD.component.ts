import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-feedback-td',
  templateUrl: './feedbackTD.component.html',
  styleUrls: ['./feedbackTD.component.scss']
})
export class FeedbackTDComponent implements OnInit {
  constructor() {
  }
  public name = '';
  public phone = '';
  public email = '';
  public message = '';
  ngOnInit() {
  }
}
