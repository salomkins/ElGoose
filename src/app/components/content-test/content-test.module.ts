import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentTestRoutingModule } from './content-test-routing.module';
import { ContentTestComponent } from './content-test.component';
//import { TestPage1Component } from './test-page-1/test-page-1.component';
import { TestPage2Component } from './test-page-2/test-page-2.component';
import {PopcornModule} from "../../components-lib/popcorn/popcorn.module";
import {PopcornService} from "../../components-lib/popcorn/popcorn.service";
import { TestPage3Component } from './test-page-3/test-page-3.component';
import {CakeModule} from "./test-page-3/cake/cake.module";

@NgModule({
  imports: [
    CommonModule,
    ContentTestRoutingModule,
    PopcornModule,
    CakeModule,
  ],
  declarations: [
    ContentTestComponent,
    //TestPage1Component,
    TestPage2Component,
    TestPage3Component
  ],
  // providers: [
  //   PopcornService
  // ]
})
export class ContentTestModule { }
