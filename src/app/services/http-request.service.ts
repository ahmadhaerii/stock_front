import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, retry, throwError } from 'rxjs';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  url: any = '..';
  constructor(private http: HttpClient, private router: Router) {
    if (isDevMode()) {
      this.url = 'https://bourseradar.runflare.run/api';
    }
  }

  public async GET(path: string) {
    return await new Promise((resolve) => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const authorization = localStorage.getItem('authorization');
      if (authorization) {
        headers = headers.set('Authorization', authorization);
      }
      this.http
        .get<any>(this.url + path, {
          headers: headers,
          observe: 'response',
        })
        .pipe(
          retry(3),
          catchError((error) => {
            return this.handleError(error);
          })
        )
        .subscribe((response) => {
          if (response.status === 204) {
            // todo show :
            // 'موردی یافت نشد'
            catchError(this.handleResponseCode.bind(this));
          } else {
            resolve(response.body);
          }
        });
    });
  }
  isPersian(str: string) {
    var p = /^[\u0600-\u06FF\s]+$/;
    str = (str + '').replace(/\d+/g, '');
    return p.test(str);
  }
  public async POST(path: string, params: any) {
    return await new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const authorization = localStorage.getItem('authorization');
      if (authorization) {
        headers = headers.set('Authorization', authorization);
      }
      this.http
        .post<any>(this.url + path, params, {
          headers: headers,
        })
        .pipe(catchError(this.handleError.bind(this)))
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  public async PUT(path: string, params: any) {
    return await new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const authorization = localStorage.getItem('authorization');
      if (authorization) {
        headers = headers.set('Authorization', authorization);
      }
      this.http
        .put<any>(this.url + path, params, {
          headers: headers,
        })
        .pipe(catchError(this.handleError.bind(this)))
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  public async DELETE(path: string) {
    return await new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const authorization = localStorage.getItem('authorization');
      if (authorization) {
        headers = headers.set('Authorization', authorization);
      }
      this.http
        .delete<any>(this.url + path, {
          headers: headers,
        })
        .pipe(catchError(this.handleError.bind(this)))
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  private handleResponseCode(error: HttpErrorResponse) {
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      // todo show :
      // ' خطا در اتصال به سرور '
    } else if (error.status === 400 || error.status === 404) {
      console.log(error);
      // todo show :
      // error.error.Error.ErrorText_Fa
    } else if (error.status === 401) {
      // todo show :
      // 'لطفا دوباره وارد شوید'

      localStorage.setItem('isLogin', '');
      localStorage.setItem('authorization', '');

      this.router.navigate(['/']);
    } else {
      // todo show :
      // error.status + ' خطا در اتصال به سرور '
      console.error(error);
    }
    return throwError(() => new Error(error.error.description_fa));
  }
}
