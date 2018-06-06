import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInPageComponent } from './Components/log-in-page/log-in-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
