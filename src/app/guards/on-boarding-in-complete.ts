import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import {ApiService} from '../services/api-service';

@Injectable()
export class OnBoardingInComplete implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.apiService.fetchMe().pipe(map(data => {
      if (data.onboarding !== 200) {
        return true;
      } else {
        this.router.navigate(['dashboard']);
      }
    }));
  }

}
