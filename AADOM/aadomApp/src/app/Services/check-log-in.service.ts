import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLogInService {

  cookieData: string;
  isAuthenticated: boolean;

  constructor(private cookieService: CookieService) { }
  checkIfLogin(): boolean {
    this.cookieData = this.cookieService.get('LoggedCredential');
    if (this.cookieData) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
  }
}
