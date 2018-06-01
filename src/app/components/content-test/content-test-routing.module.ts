import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentTestComponent } from './content-test.component';
import { TestPage2Component } from './test-page-2/test-page-2.component';
import {TestPage3Component} from 'app/components/content-test/test-page-3/test-page-3.component';

const routes: Routes = [
  { path: '', component: ContentTestComponent,
   children: [
     { path: 'page1', loadChildren: './test-page-1/test-page-1.module#TestPage1Module' },
     { path: 'page2', component: TestPage2Component },
     { path: 'page3', component: TestPage3Component },
     ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentTestRoutingModule { }
