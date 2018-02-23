import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { TestPage1Component } from './test-page-1/test-page-1.component';
import { TestPage2Component } from './test-page-2/test-page-2.component';

const routes: Routes = [
  { path: '/page1', component: TestPage1Component }
  { path: '/page2', component: TestPage2Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ContentTestRoutingModule { }
