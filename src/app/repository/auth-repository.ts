import {ApiService} from '../services/api-service';
import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {User} from '../models/user';
import {Store} from '@ngrx/store';
import {LoginRequestAction, LoginSuccessAction, UserProfileRequestAction, UserProfileSuccessAction} from '../actions/user-actions';
import {getUser, userLoggedIn, userLoggingIn} from '../reducers';

@Injectable()
export class AuthRepository {
  constructor(private apiService: ApiService, private store: Store) {
  }

  login(data: { email: string, password: string }): Observable<User> {
    this.store.dispatch(new LoginRequestAction());
    this.apiService.loginAndSetToken(data).subscribe(res => {
      this.store.dispatch(new LoginSuccessAction(res));
    });
    return this.store.select(getUser);
  }

  signup(data: {
    email: string, password: string, confirm_password: string,
    name: string, job_category: string, experience_level: string
  }): Observable<User> {
    return this.apiService.signup(data);
  }

  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.apiService.sendResetPasswordEmail(data);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<User> {
    return this.apiService.resetPassword(data);
  }

  fetchMe(force = false): Observable<User> {
    const loggedIn$ = this.store.select(userLoggedIn);
    const loggingIn$ = this.store.select(userLoggingIn);
    const user$ = this.store.select(getUser);
    combineLatest([loggedIn$, loggingIn$, user$]).subscribe(data => {
      if (!data[0] && !data[1] || force) {
        this.store.dispatch(new UserProfileRequestAction());
        this.apiService.fetchMe().subscribe(user => {
          this.store.dispatch(new UserProfileSuccessAction(user));
        });
      }
    });
    return user$;
  }

}