import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TestPage1RoutingModule } from './test-page-1-routing.module';
import { TestPage1Component } from './test-page-1.component';
import { PartnersListComponent } from './partners-list/partners-list.component';
import { DecriptionComponent } from './decription/decription.component';
import { EditComponent } from './edit/edit.component';
import { PartnersReportComponent } from './partners-report/partners-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestPage1RoutingModule
  ],
  declarations: [
    TestPage1Component,
    PartnersListComponent,
    DecriptionComponent,
    EditComponent,
    PartnersReportComponent,
  ]
})
export class TestPage1Module { }
