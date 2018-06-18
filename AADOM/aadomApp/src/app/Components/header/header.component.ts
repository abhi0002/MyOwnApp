import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookiesService: CookieService) { }

  onlogOut() {
    this.cookiesService.remove('LoggedCredential');
  }
  ngOnInit() {
  }

}
