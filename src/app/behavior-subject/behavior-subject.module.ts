import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubjectRoutingModule } from './behavior-subject-routing.module';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [BehaviorSubjectComponent],
  imports: [
    CommonModule,
    BehaviorSubjectRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ]
})
export class BehaviorSubjectModule { }
