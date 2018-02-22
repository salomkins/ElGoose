import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentContatsComponent } from './content-contats.component';

const routes: Routes = [
  { path: '', component: ContentContatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentContatsRoutingModule { }
