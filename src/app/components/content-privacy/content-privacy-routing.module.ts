import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPrivacyComponent } from './content-privacy.component';

const routes: Routes = [
  { path: '', component: ContentPrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPrivacyRoutingModule { }
