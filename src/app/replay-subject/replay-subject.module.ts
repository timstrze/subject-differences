import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaySubjectRoutingModule } from './replay-subject-routing.module';
import { ReplaySubjectComponent } from './replay-subject.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ReplaySubjectComponent],
  imports: [
    CommonModule,
    ReplaySubjectRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ]
})
export class ReplaySubjectModule { }
