import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CheckLogInService } from './check-log-in.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuardService implements CanActivate {

  constructor(
    private checkLogin: CheckLogInService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.checkLogin.checkIfLogin()) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}

