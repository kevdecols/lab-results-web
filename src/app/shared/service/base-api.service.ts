import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Common } from '../model/common';

@Injectable()
export abstract class BaseApiService<T extends Common> {

  protected apiUlr = environment.apiUrl;
  protected abstract uri;

  constructor(protected httpClient: HttpClient) { }

  public findById(id: number): Observable<T> {
    return this.httpClient.get<T>(
      `${this.apiUlr}${this.uri}/${id}`
    );
  }

  public find(recordsPerPage?: number, page?: number): Observable<Array<T>> {
    return this.httpClient.get<Array<T>>(
      `${this.apiUlr}${this.uri}`
    );
  }

  public save(t: T): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUlr}${this.uri}`, t
    );
  }

  public edit(id: number, t: T): Observable<T> {
    return this.httpClient.patch<T>(
      `${this.apiUlr}${this.uri}/${id}`, t
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.apiUlr}${this.uri}/${id}`
    );
  }


}
