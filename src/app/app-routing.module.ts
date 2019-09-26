import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)},
  { path: 'behavior-subject', loadChildren: () => import('./behavior-subject/behavior-subject.module').then(m => m.BehaviorSubjectModule)},
  { path: 'replay-subject', loadChildren: () => import('./replay-subject/replay-subject.module').then(m => m.ReplaySubjectModule)},
  { path: 'async-subject', loadChildren: () => import('./async-subject/async-subject.module').then(m => m.AsyncSubjectModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
