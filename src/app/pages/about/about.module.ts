import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {AboutUsComponent} from './about-us.component';
import {AboutPartnersComponent} from './about-partners.component';
import {AboutContactsComponent} from './about-contacts.component';
import {AboutPartnerComponent} from './about-partner.component';
import {WellComponent} from "../../components/content/well/well.component";
import {BannerComponent} from "../../components/content/banner/banner.component";
import {Well1Component} from "../../components/content/well1/well1.component";
import {CameraComponent} from "../../components/content/camera/camera.component";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
    AboutUsComponent,
    AboutPartnersComponent,
    AboutContactsComponent,
    AboutPartnerComponent,
    WellComponent,
    BannerComponent,
    Well1Component,
    CameraComponent
  ]
})
export class AboutModule {
}
