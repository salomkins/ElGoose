import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContentComponent } from './components/content/content.component';
import { CameraComponent } from './components/content/camera/camera.component';
import { BannerComponent } from './components/content/banner/banner.component';
import { WellComponent } from './components/content/well/well.component';
import { Well1Component } from './components/content/well1/well1.component';
import { ContentServicesComponent } from './components/content-services/content-services.component';
import { MobileCenterComponent } from './components/content-services/mobile-center/mobile-center.component';
import { CanHelpComponent } from './components/content-services/can-help/can-help.component';
import { PriceListComponent } from './components/content-services/price-list/price-list.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';
import { FactsComponent } from './components/content-about/facts/facts.component';
import { WeAreComponent } from './components/content-about/we-are/we-are.component';
import { AwardsComponent } from './components/content-about/awards/awards.component';
import { SkillsComponent } from './components/content-about/skills/skills.component';
import { ContentFaqsComponent } from './components/content-faqs/content-faqs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContactItemComponent,
    ContentComponent,
    CameraComponent,
    BannerComponent,
    WellComponent,
    Well1Component,
    ContentServicesComponent,
    MobileCenterComponent,
    CanHelpComponent,
    PriceListComponent,
    ContentAboutComponent,
    FactsComponent,
    WeAreComponent,
    AwardsComponent,
    SkillsComponent,
    ContentFaqsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
