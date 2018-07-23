import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentContactsRoutingModule} from './content-contacts-routing.module';
import {ContentContactsComponent} from './content-contacts.component';
import {MapComponent} from './map/map.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {FooterContactsModule} from '../../components-lib/footer-contacts/footer-contacts.module';
import {BtnModule} from '../../components-lib/btn/btn.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FeedbackTDComponent} from './feedbackTD/feedbackTD.component';
import {FeedbackMDComponent} from './feedbackMD/feedbackMD.component';
import {FeedbackReactiveComponent} from './feedbackReactive/feedbackReactive.component';
import {ForbiddenValidatorDirective} from './feedbackTD/forbidden-name.directive';

@NgModule({
  imports: [
    CommonModule,
    ContentContactsRoutingModule,
    FooterContactsModule,
    BtnModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContentContactsComponent,
    MapComponent,
    FeedbackComponent,
    FeedbackTDComponent,
    FeedbackMDComponent,
    FeedbackReactiveComponent,
    ForbiddenValidatorDirective,
  ],
})
export class ContentContactsModule {
}
