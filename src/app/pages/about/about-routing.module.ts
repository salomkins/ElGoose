import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";
import {AboutUsComponent} from "./about-us.component";
import {AboutPartnersComponent} from "./about-partners.component";
import {AboutContactsComponent} from "./about-contacts.component";
import {AboutPartnerComponent} from "./about-partner.component";

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'us', component: AboutUsComponent },
  { path: 'partners', component: AboutPartnersComponent },
  { path: 'partners/:partnerId', component: AboutPartnerComponent },
  { path: 'contacts', component: AboutContactsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
