import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('canActivate', this.authService.isAuthenticated());
    if (this.authService.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
