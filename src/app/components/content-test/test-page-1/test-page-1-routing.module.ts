import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersListComponent } from './partners-list/partners-list.component';
import { PartnersReportComponent } from './partners-report/partners-report.component';

const routes: Routes = [
  { path: 'partners', component: PartnersListComponent },
  { path: '', redirectTo: 'partners' },
  { path: 'partners/report', component: PartnersReportComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPage1RoutingModule { }
