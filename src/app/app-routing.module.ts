import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' },
  { path: 'services', loadChildren: 'app/pages/services/services.module#ServicesModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
