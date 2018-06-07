import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkedListComponent } from './marked-list.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MarkedListComponent,
  ],
  exports: [
    MarkedListComponent,
  ]
})
export class MarkedListModule { }
