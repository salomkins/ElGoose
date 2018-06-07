import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPrivacyRoutingModule } from './content-privacy-routing.module';
import { ContentPrivacyComponent } from './content-privacy.component';

@NgModule({
  imports: [
    CommonModule,
    ContentPrivacyRoutingModule
  ],
  declarations: [ContentPrivacyComponent]
})
export class ContentPrivacyModule { }
