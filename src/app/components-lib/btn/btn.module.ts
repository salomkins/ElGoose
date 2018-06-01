import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import  { BtnComponent } from './btn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    BtnComponent,
  ],
  exports: [
    BtnComponent,
  ]
})
export class BtnModule { }
