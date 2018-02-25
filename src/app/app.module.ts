import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactItemComponent } from './components/footer-contacts/contact-item/contact-item.component';
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
import { AnswersComponent } from './components/content-faqs/answers/answers.component';
import { SupportComponent } from './components/content-faqs/support/support.component';
import { AdditionalInfoComponent } from './components/content-faqs/additional-info/additional-info.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterContactsComponent } from './components/footer-contacts/footer-contacts.component';
// import { ContentTestComponent } from './components/content-test/content-test.component';
// import { TestPage1Component } from './components/content-test/test-page-1/test-page-1.component';
// import { TestPage2Component } from './components/content-test/test-page-2/test-page-2.component';
//import { ContentContactsComponent } from './components/content-contacts/content-contacts.component';
//import { MapComponent } from './components/content-contacts/map/map.component';
//import { FeedbackComponent } from './components/content-contacts/feedback/feedback.component';
//import { ContentPrivacyComponent } from './components/content-privacy/content-privacy.component';


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
    AnswersComponent,
    SupportComponent,
    AdditionalInfoComponent,
    NotFoundComponent,
    FooterContactsComponent,
    // ContentTestComponent,
    // TestPage1Component,
    // TestPage2Component,
    //ContentContactsComponent,
    //MapComponent,
    //FeedbackComponent,
    //ContentPrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
