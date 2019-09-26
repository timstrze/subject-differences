import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsyncSubjectComponent} from './async-subject.component';


const routes: Routes = [
  {
    path: '',
    component: AsyncSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsyncSubjectRoutingModule { }
