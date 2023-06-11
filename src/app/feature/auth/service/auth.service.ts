import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  protected apiUlr = environment.apiUrl+'v1/auth/';

  constructor(private httpClient: HttpClient) { }

  public signIn(login: Login): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUlr}sign-in`, login
    );
  }

  public requestResetPassword(email): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUlr}request-reset-password`, {email}
    );
  }

  public resetPassword(value): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUlr}reset-password`, value
    );
  }

  public changePassword(value): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUlr}change-password`, value
    );
  }

}
