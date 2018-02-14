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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
