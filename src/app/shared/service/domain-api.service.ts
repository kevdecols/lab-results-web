import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Domain } from '../model/domain';
@Injectable({
  providedIn: 'root'
})
export class DomainApiService {

  protected apiUrl = environment.apiUrl+'v1/domains';

  constructor(private httpClient: HttpClient) { }

  public findActivesByName(name: string): Observable<Array<Domain>> {
    return this.httpClient.get<Array<Domain>>(
      `${this.apiUrl}?name=${name}`
    );
  }

}
