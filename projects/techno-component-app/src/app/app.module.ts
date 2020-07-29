import { TechnoLibModule } from './../../../techno-lib/src/lib/techno-lib.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TechnoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
