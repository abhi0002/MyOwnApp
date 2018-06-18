import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpGetService } from '../../Services/http-get.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  users: any;
  userName: string;
  pass: string;
  constructor(
          private getHttp: HttpGetService,
          private router: Router,
          private cookiesService: CookieService ) { }

  ngOnInit() {
  }
  onSignin(form: NgForm) {
  }

  getLogInData(id , password) {
    this.getHttp.getData('http://172.16.0.119:8080/public/login?email=' + id + '&password=' + password )

    .subscribe((response) => {
              this.users = response;
              console.log('logIn');
              console.log(this.users);

              if (this.users.status === 200) {
                this.cookiesService.put( 'LoggedCredential', id);
                this.router.navigate(['dashboard']);
              console.log('Wrong Credentials');
              }
    });
  }
}
