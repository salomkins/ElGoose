import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentContactsComponent } from './content-contacts.component';

const routes: Routes = [
  { path: '', component: ContentContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentContactsRoutingModule { }
