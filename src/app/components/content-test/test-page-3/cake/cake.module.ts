import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeComponent } from './cake.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CakeComponent
  ],
  exports: [
    CakeComponent
  ]
})
export class CakeModule { }
