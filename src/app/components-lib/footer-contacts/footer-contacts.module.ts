import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterContactsComponent} from './footer-contacts.component';
import {ContactItemComponent} from "./contact-item/contact-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterContactsComponent,
    ContactItemComponent,
  ],
  exports: [
    FooterContactsComponent,
  ]
})
export class FooterContactsModule { }
