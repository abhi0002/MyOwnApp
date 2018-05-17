import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    NavbarComponent,
    NotFoundComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       {
        path: '',
        component: DefaultPageComponent
      },
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: 'home',
       component: HomeComponent
      //  children: [
      //   {
      //     path: '',
      //     component: DashBoardComponent   // {3}
      //   }
      //  ]
      },
      {
        path: '**',
        component: NotFoundComponent
      }

    ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
