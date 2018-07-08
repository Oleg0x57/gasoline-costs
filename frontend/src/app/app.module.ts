import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpendsComponent } from './expends/expends.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpendsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
