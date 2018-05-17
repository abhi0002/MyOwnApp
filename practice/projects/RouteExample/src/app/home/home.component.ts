import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cookieValue = 'UNKNOWN';
  cookieOneValue = 'UNKNOWN';
  list: any[] ;
  userDetails: any;
  user: any;
  logInFlag: boolean;
  constructor(private router: Router ,  private cookieService: CookieService) {
    this.user = { username: '', password: '' };
    this.userDetails = [{
      username: 'Payal',
      password: 'payalpayal'
    }];
  }

  searchName(a , b) {
   for (let i = 0; i < this.userDetails.length; i++) {
  console.log(this.userDetails[i]);

    if ( a === this.userDetails[i].username && b === this.userDetails[i].password) {
      this.router.navigateByUrl('/dashboard');
      this.logInFlag = true;
    } else {
      console.log('Wrong password');
    }
  }

  }
  ngOnInit(): void {

    this.cookieService.set( 'Name', JSON.stringify( this.userDetails ));
    this.cookieValue = JSON.parse( this.cookieService.get('Name'));

    // for (let [key, value] in Object.entries(this.cookieValue)) {
    //   this.list.push(key);
    // }
    // this.userDetails.forEach(function (value) {
    //   console.log(value);
    // });

    this.cookieService.set( 'one', 'One' );
    this.cookieOneValue = this.cookieService.get('one');

    console.log(this.cookieValue);
    console.log(typeof this.cookieValue);

  }

}
