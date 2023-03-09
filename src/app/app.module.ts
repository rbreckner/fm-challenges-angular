import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { StatsPreviewCardV1Component } from './stats-preview-card/stats-preview-card-v1/stats-preview-card-v1.component';
import { ResultsSummaryV1Component } from './results-summary/results-summary-v1/results-summary-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsPreviewCardV1Component,
    ResultsSummaryV1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
