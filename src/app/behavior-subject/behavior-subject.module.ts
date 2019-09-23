import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubjectRoutingModule } from './behavior-subject-routing.module';
import { BehaviorSubjectComponent } from './behavior-subject.component';


@NgModule({
  declarations: [BehaviorSubjectComponent],
  imports: [
    CommonModule,
    BehaviorSubjectRoutingModule
  ]
})
export class BehaviorSubjectModule { }
