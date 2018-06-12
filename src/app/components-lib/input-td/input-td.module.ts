import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { InputTdComponent } from './input-td.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputTdComponent,
  ],
  exports: [
    InputTdComponent,
  ]
})
export class InputTdModule { }
