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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContactItemComponent,
    ContentComponent,
    CameraComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
