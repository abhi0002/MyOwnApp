import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LogInPageComponent } from './Components/log-in-page/log-in-page.component';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { HttpGetService } from './Services/http-get.service';
import { PagerService } from './Services/pager.service';

const appRoutes: Routes = [
  { path: 'login', component: LogInPageComponent},
  { path: 'dashboard', component: DashBoardComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    PagerService,
    HttpGetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
