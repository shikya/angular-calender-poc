import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { MwlDemoComponentComponent } from './mwl-demo-component/mwl-demo-component.component';
import { MwlDemoUtilComponent } from './mwl-demo-util/mwl-demo-util.component';

@NgModule({
  declarations: [
    AppComponent,
    MwlDemoComponentComponent,
    MwlDemoUtilComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
