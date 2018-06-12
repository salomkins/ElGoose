import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../feedbackTD/forbidden-name.directive";

@Component({
  selector: 'app-feedback-reactive',
  templateUrl: './feedbackReactive.component.html',
  styleUrls: ['./feedbackReactive.component.scss']
})
export class FeedbackReactiveComponent implements OnInit {

  feedbackForm: FormGroup;
  nameControl: FormControl = new FormControl(
    'Vasilijs',
    [
      Validators.required,
      forbiddenNameValidator(['Vasilijs'])
    ]
  );

  constructor() {
  }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      name: this.nameControl
    });
  }
}
