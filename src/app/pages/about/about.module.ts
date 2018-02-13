import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {AboutUsComponent} from './about-us.component';
import {AboutPartnersComponent} from './about-partners.component';
import {AboutContactsComponent} from './about-contacts.component';
import { AboutPartnerComponent } from './about-partner.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, AboutUsComponent, AboutPartnersComponent, AboutContactsComponent, AboutPartnerComponent]
})
export class AboutModule {
}
