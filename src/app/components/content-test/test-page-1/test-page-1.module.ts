import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPage1RoutingModule } from './test-page-1-routing.module';
import { TestPage1Component } from './test-page-1.component';
import { PartnersListComponent } from './partners-list/partners-list.component';

@NgModule({
  imports: [
    CommonModule,
    TestPage1RoutingModule
  ],
  declarations: [
    TestPage1Component,
    PartnersListComponent,
  ]
})
export class TestPage1Module { }
