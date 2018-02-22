import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';
import { ContentServicesComponent } from './components/content-services/content-services.component';
import { ContentFaqsComponent } from './components/content-faqs/content-faqs.component';
import { ContentContatsComponent } from './components/content-contats/content-contats.component';

//import { ContentPrivacyComponent } from './components/content-privacy/content-privacy.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'home', redirectTo: '' },
  { path: 'about', component: ContentAboutComponent },
  { path: 'services', component: ContentServicesComponent },
  { path: 'faqs', component: ContentFaqsComponent },
  { path: 'contats', component: ContentContatsComponent },
  //{ path: 'privacy', component: ContentPrivacyComponent },
];
const routesLazy: Routes = [
  { path: 'privacy', loadChildren: './components/content-privacy/content-privacy.module#ContentPrivacyModule' },
  { path: 'policy', redirectTo: 'privacy' },
];
const routes404: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routesLazy),
    RouterModule.forRoot(routes404)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
