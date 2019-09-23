import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaySubjectRoutingModule } from './replay-subject-routing.module';
import { ReplaySubjectComponent } from './replay-subject.component';


@NgModule({
  declarations: [ReplaySubjectComponent],
  imports: [
    CommonModule,
    ReplaySubjectRoutingModule
  ]
})
export class ReplaySubjectModule { }
