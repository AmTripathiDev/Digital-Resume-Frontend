import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthUtils} from '../utility/auth-utils';

@Injectable()
export class AnonGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!AuthUtils.getAuthToken()) {
      return true;
    } else {
      this.router.navigate(['verify']);
      // condition to navigate after login
      // if verified: false -> verify
      // verified: true and onboarding : 0 -> onboarding
      // verified: true,onboarding: 200 -> dashboard
    }
  }

}
