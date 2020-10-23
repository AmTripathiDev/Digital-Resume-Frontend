import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertService} from './alert-service';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ApiService} from './api-service';

@Injectable()
export class HttpService {
  private baseURl = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient, private alertService: AlertService) {
  }

  get(url: string, paramData?: any): Observable<any> {
    const data = {params: paramData, headers: this.getAuthHeaders()};
    return this.httpClient.get(this.baseURl + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(this.baseURl + url, body, {headers: this.getAuthHeaders()}).pipe(catchError(this.errorHandler.bind(this)));
  }

  patch(url: string, body: any): Observable<any> {
    return this.httpClient.patch(this.baseURl + url, body, {headers: this.getAuthHeaders()}).pipe(catchError(this.errorHandler.bind(this)));
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${ApiService.getAuthToken()}`
    };
  }

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    const message = response.message;
    const status = response.status;
    if (status === 401) {
      // user ko logout krna hai and then again send him
      // to login page
    }
    if (key === 'isTrusted') {
      this.alertService.error('Please connect to internet Connection');
    } else {
      this.alertService.error(message);
    }
    return throwError({message, error});
  }
}
