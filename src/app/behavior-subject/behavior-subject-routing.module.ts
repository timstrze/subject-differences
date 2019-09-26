import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BehaviorSubjectComponent} from './behavior-subject.component';


const routes: Routes = [
  {
    path: '',
    component: BehaviorSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BehaviorSubjectRoutingModule { }
