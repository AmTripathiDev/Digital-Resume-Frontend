import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthUtils} from '../utility/auth-utils';
import {ApiService} from '../services/api-service';
import {map} from 'rxjs/operators';

@Injectable()
export class AnonGuard implements CanActivate {
  constructor(private router: Router, private apiService: ApiService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (!AuthUtils.getAuthToken()) {
      return true;
    } else {
      return this.apiService.fetchMe().pipe(map(data => {
        if (!data.verified) {
          this.router.navigate(['verify']);
        } else if (data.onboarding !== 200) {
          this.router.navigate(['on-boarding']);
        } else {
          this.router.navigate(['dashboard']);
        }
      }));
    }
  }

}
