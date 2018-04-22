import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentContactsRoutingModule } from './content-contacts-routing.module';
import { ContentContactsComponent } from './content-contacts.component';
import { MapComponent } from './map/map.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FooterContactsModule} from '../../components-lib/footer-contacts/footer-contacts.module';

@NgModule({
  imports: [
    CommonModule,
    ContentContactsRoutingModule,
    FooterContactsModule,
  ],
  declarations: [
    ContentContactsComponent,
    MapComponent,
    FeedbackComponent
  ]
})
export class ContentContactsModule { }
