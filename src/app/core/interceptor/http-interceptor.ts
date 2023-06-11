import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError, finalize } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthStorageService } from '../../shared/service/auth-storage.service';
import { AlertService } from '../../shared/service/alert.service';
import { Router } from '@angular/router';
import { NavigationRoute } from 'src/app/shared/constant/navigation-route.constant';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {


  constructor(
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private authStorageService: AuthStorageService,
    private router: Router
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    return next.handle(this.handle(req)).pipe(
      finalize(() => this.spinner.hide()),
      catchError((error) => {
        let errorMessage = "";
        if (error instanceof HttpErrorResponse) {
          console.log('error.status ', error.status);
          if (error.status == 401) {
            this.alertService.showWarning("Se ha vencido la sesión por favor inicie sesión nuevamente");
            this.router.navigate(['/', NavigationRoute.AUTH, NavigationRoute.LOGIN]);
          } else {
            errorMessage = this.handleError(error);
            this.alertService.showError(errorMessage);
          }
        }
        return throwError(() => errorMessage);
      })
    );
  }

  handle(req: HttpRequest<any>) {
    const token = this.authStorageService.getToken();
    const authReq = req.clone({
      setHeaders: {
        Authorization: 'bearer ' + token
      }
    });
    return authReq;
  }

  private isResource(url: string): boolean {
    return url.includes('assets/image') ? true : false;
  }

  private handleError(error) {
    if (error instanceof ErrorEvent) {
      // client-side error
      console.log('Server-side error:' + error.error.message);
      return `An internal error has occurred`;
    } else {
      // backend error
      console.log('Server-side error:' + error.status + '-' + error.message);
      console.log('error ', error);
      return error.error?.message ? error.error.message : `Communication with the server has been lost`;
    }

  }

}
