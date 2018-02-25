import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPage1Component } from './test-page-1.component';

const routes: Routes = [
  { path: '', component: TestPage1Component }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPage1RoutingModule { }
