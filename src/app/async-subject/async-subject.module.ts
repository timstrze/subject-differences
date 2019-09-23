import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncSubjectRoutingModule } from './async-subject-routing.module';
import { AsyncSubjectComponent } from './async-subject.component';


@NgModule({
  declarations: [AsyncSubjectComponent],
  imports: [
    CommonModule,
    AsyncSubjectRoutingModule
  ]
})
export class AsyncSubjectModule { }
