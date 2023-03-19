import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { StatsPreviewCardV1Component } from './stats-preview-card/stats-preview-card-v1/stats-preview-card-v1.component';
import { ResultsSummaryV1Component } from './results-summary/results-summary-v1/results-summary-v1.component';
import { ExpensesChartV1Component } from './expenses-chart/expenses-chart-v1/expenses-chart-v1.component';
import { TodoComponent } from './todo/todo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsPreviewCardV1Component,
    ResultsSummaryV1Component,
    ExpensesChartV1Component,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
