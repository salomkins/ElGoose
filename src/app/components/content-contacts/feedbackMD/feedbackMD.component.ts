import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, map, tap} from 'rxjs/operators';
import {FeedbackType} from '../feedback/feedback.type';
import {forbiddenNameValidator} from '../feedbackTD/forbidden-name.directive';

@Component({
  selector: 'app-feedback-md',
  templateUrl: './feedbackMD.component.html',
  styleUrls: ['./feedbackMD.component.scss']
})
export class FeedbackMDComponent implements OnInit {
  feedbackForm: FormGroup;
  phoneControl: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.pattern('^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$'),
      forbiddenNameValidator(['02', '03', '112'])
    ]
  );
  private _feedback: FeedbackType;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          forbiddenNameValidator(['Vasilij'])
        ]
      ],
      phone: this.phoneControl,
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      message: ['',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(300)
        ]
      ],
    });

    this.feedbackForm.valueChanges.pipe(
      filter(() => this.feedbackForm.valid),
      map(formData => {
        return this.feedback = new FeedbackType(
          formData.name,
          formData.phone,
          formData.email,
          formData.message
        );
      }),
      tap(formFeedback => {
        this.feedback = formFeedback;
      })
    ).subscribe();
  }

  private get feedback(): FeedbackType {
    return this._feedback;
  }

  private set feedback(value: FeedbackType) {
    console.log('Final value', value);
    this._feedback = value;
  }
}
