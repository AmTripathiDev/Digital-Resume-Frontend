import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AlertService} from './alert-service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable()
export class HttpService {
  private baseURl = 'https://reqres.in/aio';

  constructor(private httpClient: HttpClient, private alertService: AlertService) {
  }

  get(url: string, paramData?: any) {
    const data = {params: paramData};
    return this.httpClient.get(this.baseURl + url, data).pipe(catchError(this.errorHandler.bind(this)));
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
