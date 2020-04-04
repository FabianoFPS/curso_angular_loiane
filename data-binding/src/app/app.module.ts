import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindigComponent } from './data-bindig/data-bindig.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindigComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
