import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LogInPageComponent } from './Components/log-in-page/log-in-page.component';
// import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { TablesComponent, DialogContentTableComponent } from './Components/tables/tables.component';

import { HttpGetService } from './Services/http-get.service';
import { PagerService } from './Services/pager.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HeaderComponent } from './Components/header/header.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { DeactivateRouteService } from './Services/deactivate-route.service';
import { LoginAuthGuardService } from './Services/login-auth-guard.service';
import { RegistrantsTableComponent } from './Components/registrants-table/registrants-table.component';


const appRoutes: Routes = [
  { path: 'login', canActivate: [LoginAuthGuardService], component: LogInPageComponent},
  { path: 'dashboard', canActivate: [AuthGuardService],  component: DashBoardComponent},
  { path: 'tables', canActivate: [AuthGuardService],  component: TablesComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    DashBoardComponent,
    TablesComponent,
    DialogContentTableComponent,
    HeaderComponent,
    RegistrantsTableComponent
  ],
  entryComponents: [DialogContentTableComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    ChartsModule,
    MatDialogModule,
    BrowserAnimationsModule,

  ],
  providers: [
    PagerService,
    HttpGetService,
    CookieService,
    AuthGuardService,
    DeactivateRouteService,
    LoginAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
