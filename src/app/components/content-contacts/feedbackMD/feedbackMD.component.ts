import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, map, tap} from 'rxjs/operators';
import {FeedbackType} from '../feedback/feedback.type';
import {forbiddenNameValidator} from '../feedbackTD/forbidden-name.directive';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-feedback-md',
  templateUrl: './feedbackMD.component.html',
  styleUrls: ['./feedbackMD.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackMDComponent implements OnInit, OnDestroy {
  feedbackForm: FormGroup;
  phoneControl: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.pattern('^(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*$'),
      forbiddenNameValidator(['02', '03', '112'])
    ]
  );
  submitDisabled = true;
  private _feedback: FeedbackType;
  private phoneChangeSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
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
        this.submitDisabled = false;
      })
    ).subscribe(subscribeData => {
      console.log('subscribeData', subscribeData);
    });


    this.phoneChangeSubscription = this.phoneControl.valueChanges.pipe(
      map(value => {
        return value.replace(/[^0-9+() ]/g, '');
      }),
    ).subscribe(this.handlePhoneChange);
    // this.phoneControl.setValue(this.phoneControl.value);
  }

  ngOnDestroy() {
    this.phoneChangeSubscription.unsubscribe();
  }

  private handlePhoneChange(response: string) {
    if (response !== this.phoneControl.value) {
      this.phoneControl.setValue(response);
    }
  }

  private get feedback(): FeedbackType {
    return this._feedback;
  }

  private set feedback(value: FeedbackType) {
    console.log('Final value', value);
    this._feedback = value;
  }
}
