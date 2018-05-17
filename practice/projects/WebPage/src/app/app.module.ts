import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [ NgxSmartModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
