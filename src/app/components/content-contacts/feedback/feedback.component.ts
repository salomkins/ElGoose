import {Component, OnInit} from '@angular/core';
import {FeedbackType} from './feedback.type';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedback: FeedbackType = null;
  validatedFields: any = {};


  constructor() {
  }

  ngOnInit() {
    this.feedback = new FeedbackType('', '', '', '');
  }

  handleFormSubmit() {
    console.log(this.feedback);
    this.validateForm();
  }

  validateField(field: string) {
    if (!this.feedback.hasOwnProperty(field)) {
      return;
    }

    switch (field) {
      case 'name':
        console.log('validating', field);
        this.validatedFields[field] = !this.isEmpty(this.feedback[field]);
        break;
      case 'phone':
        console.log('validating', field);
        this.validatedFields[field] = !this.isEmpty(this.feedback[field]);
        break;
      case 'email':
        console.log('validating', field);
        // parbaudam vai ir tuks
        this.validatedFields[field] = !this.isEmpty(this.feedback[field]);
        if (this.validatedFields[field] === false) {
          return;
        }
        // parbaudam vai ir epasts
        this.validatedFields[field] = this.isEmailValid(this.feedback[field]);
        break;
      case 'message':
        console.log('validating', field);
        this.validatedFields[field] = !this.isEmpty(this.feedback[field]);
        break;
    }
  }

  validateForm() {
    const fieldList = Object.keys(this.feedback);
    fieldList.forEach((field) => {
      this.validateField(field);
    });
    let hasError = false;

    Object.keys(this.validatedFields).forEach(key=>{
      if (this.validatedFields[key] === false) {
        hasError = true;
      }
    });

    if (hasError === false) {
      this.sendFeedback();
    }
  }


  private isEmpty(value: string): boolean {
    return !value;
  }

  private isEmailValid(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  private sendFeedback() {
    console.log('feedback sent');
  }
}
