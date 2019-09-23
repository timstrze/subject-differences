import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {StockQuoteService} from './services/stock-quote.service';
import {SubjectComponent} from './subject/subject.component';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';
import {ReplaySubjectComponent} from './replay-subject/replay-subject.component';
import {AsyncSubjectComponent} from './async-subject/async-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    StockQuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
