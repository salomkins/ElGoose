import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TestPage1RoutingModule } from './test-page-1-routing.module';
import { TestPage1Component } from './test-page-1.component';
import { PartnersListComponent } from './partners-list/partners-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestPage1RoutingModule
  ],
  declarations: [
    TestPage1Component,
    PartnersListComponent,
  ]
})
export class TestPage1Module { }
