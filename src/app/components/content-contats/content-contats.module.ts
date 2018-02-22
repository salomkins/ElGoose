import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentContatsRoutingModule } from './content-contats-routing.module';
import { ContentContatsComponent } from './content-contats.component';
import { MapComponent } from './map/map.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  imports: [
    CommonModule,
    ContentContatsRoutingModule
  ],
  declarations: [
    ContentContatsComponent,
    MapComponent,
    FeedbackComponent
  ]
})
export class ContentContatsModule { }
