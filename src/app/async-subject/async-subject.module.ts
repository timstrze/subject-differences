import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncSubjectRoutingModule } from './async-subject-routing.module';
import { AsyncSubjectComponent } from './async-subject.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AsyncSubjectComponent],
  imports: [
    CommonModule,
    AsyncSubjectRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ]
})
export class AsyncSubjectModule { }
