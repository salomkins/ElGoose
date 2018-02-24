import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentContactsRoutingModule } from './content-contacts-routing.module';
import { ContentContactsComponent } from './content-contacts.component';
import { MapComponent } from './map/map.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  imports: [
    CommonModule,
    ContentContactsRoutingModule
  ],
  declarations: [
    ContentContactsComponent,
    MapComponent,
    FeedbackComponent
  ]
})
export class ContentContactsModule { }
