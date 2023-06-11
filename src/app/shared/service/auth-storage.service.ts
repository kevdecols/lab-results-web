import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as SecureLS from 'secure-ls';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private secureLs = new SecureLS({
    encodingType: environment.encriptionConfig.encriptionType.base46,
    encryptionSecret: environment.encriptionConfig.encriptionKey,
    isCompression: true,
  });

  public setAuthentication(user: User, token: string) {
    this.secureLs.set('user', user);
    this.secureLs.set('token', token);
  }

  public getAuthenticatedUser(): User {
    return this.secureLs.get('user');
  }

  public getToken(): string {
    return this.secureLs.get('token');
  }

  public isUserAuthenticated(): boolean {
    return this.getAuthenticatedUser()?.name ? true : false;
  }

  public isAuthenticated(): Observable<boolean> {
    const autenticated = this.getAuthenticatedUser()?.name ? true : false;
    return of(autenticated);
  }

  public clear() {
    this.secureLs.removeAll();
    localStorage.clear();
  }

  
}
