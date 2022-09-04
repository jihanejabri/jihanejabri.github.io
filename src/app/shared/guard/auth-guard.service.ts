import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/signIn']);
    }
    return this.authService.isLoggedIn();
  }
}
