import {Injectable} from '@angular/core';
import {HttpService} from './http-service';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {map} from 'rxjs/operators';


@Injectable()
export class ApiService {
  private static authToken = 'auth token';

  constructor(private httpService: HttpService) {
  }

  static getAuthToken() {
    return localStorage.getItem(ApiService.authToken);
  }

  static setAuthToken(value) {
    localStorage.setItem(ApiService.authToken, value);
  }

  static removeAuthToken() {
    localStorage.removeItem(ApiService.authToken);
  }

  signup(data: {
    email: string, password: string, confirm_password: string,
    name: string, job_category: string, experience_level: string
  }): Observable<User> {
    return this.httpService.post('/user/signup', data);
  }

  loginAndSetToken(data: { email: string, password: string }): Observable<User> {
    return this.httpService.get('/user/login', data).pipe(map(res => {
      ApiService.setAuthToken(res.token);
      return res;
    }));
  }


  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.httpService.get('/user/reset/password/email', data);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<User> {
    return this.httpService.patch('/user/reset/password', data);
  }
}
