import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpendsComponent } from './expends/expends.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ExpendsFormComponent } from './expends-form/expends-form.component';
import { ExpendsTableComponent } from './expends-table/expends-table.component';
import { ExpendsChartComponent } from './expends-chart/expends-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpendsComponent,
    ExpendsFormComponent,
    ExpendsTableComponent,
    ExpendsChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
