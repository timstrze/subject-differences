import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SubjectComponent} from './subject/subject.component';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';
import {ReplaySubjectComponent} from './replay-subject/replay-subject.component';
import {AsyncSubjectComponent} from './async-subject/async-subject.component';

const routes: Routes = [
  { path: '', redirectTo: '/subject', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior-subject', component: BehaviorSubjectComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'async-subject', component: AsyncSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
