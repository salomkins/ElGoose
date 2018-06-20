import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {mf} from './components-lib/my-functions/mf.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterContactsModule } from "./components-lib/footer-contacts/footer-contacts.module";
import { MarkedListModule } from './components-lib/marked-list/marked-list.module';
import { ProductListModule } from './components-lib/product-list/product-list.module';
import { BtnModule } from './components-lib/btn/btn.module';
import { PopcornService } from "./components-lib/popcorn/popcorn.service";
import { LoadIconModule } from './components-lib/load-icon/load-icon.module';
import {FormsModule} from "@angular/forms";
import { InputTdModule } from './components-lib/input-td/input-td.module';
import {HttpClientModule} from "@angular/common/http";
import { PeopleComponent } from './components/content-about/people/people.component';
import {PeopleService} from "./components/content-about/people/people.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
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
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterContactsModule,
    MarkedListModule,
    ProductListModule,
    BtnModule,
    LoadIconModule,
    HttpClientModule, 
 ],
  providers: [mf, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
