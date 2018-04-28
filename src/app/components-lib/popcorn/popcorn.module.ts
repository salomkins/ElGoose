import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopcornComponent } from './popcorn.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NotificationComponent } from './notification/notification.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PopcornComponent,
    FormComponent,
    ListComponent,
    NotificationComponent
  ],
  exports: [
    PopcornComponent
  ]
})
export class PopcornModule { }
