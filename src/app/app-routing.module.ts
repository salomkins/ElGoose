import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { ContentComponent } from './components/content/content.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';
import { ContentServicesComponent } from './components/content-services/content-services.component';
import { ContentFaqsComponent } from './components/content-faqs/content-faqs.component';

//import { ContentContactsComponent } from './components/content-contacts/content-contacts.component';
//import { ContentPrivacyComponent } from './components/content-privacy/content-privacy.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
//
// import { ContentTestComponent } from './components/content-test/content-test.component';
// import { TestPage1Component } from './components/content-test/test-page-1/test-page-1.component';
// import { TestPage2Component } from './components/content-test/test-page-2/test-page-2.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: ContentAboutComponent },
  { path: 'services', component: ContentServicesComponent },
  { path: 'faqs', component: ContentFaqsComponent },
  //{ path: 'contacts', component: ContentContactsComponent },
  //{ path: 'privacy', component: ContentPrivacyComponent },
  { path: 'contacts', loadChildren: './components/content-contacts/content-contacts.module#ContentContactsModule' },
  { path: 'privacy', loadChildren: './components/content-privacy/content-privacy.module#ContentPrivacyModule' },
  { path: 'policy', redirectTo: 'privacy' },
  //
  // { path: 'test', component: ContentTestComponent,
  //  children: [
  //    { path: 'page1', component: TestPage1Component },
  //    { path: 'page2', component: TestPage2Component },
  //    ]}
  { path: 'test', loadChildren: './components/content-test/content-test.module#ContentTestModule' },

];
const routes404: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes404)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
