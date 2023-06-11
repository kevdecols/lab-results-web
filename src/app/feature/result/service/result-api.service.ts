import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientExam } from '../model/patient-exam';
import { Filter } from '../model/filter';
import { Patient } from '../model/patient';

@Injectable()
export class ResultApiService {

  protected apiUrl = environment.apiUrl + 'v1/results';

  constructor(private httpClient: HttpClient) { }

  public findByPatient(identificationType: string, identificationNumber: string): Observable<Array<PatientExam>> {
    return this.httpClient.get<Array<PatientExam>>(
      `${this.apiUrl}/patients?identificationType=${identificationType}&identificationNumber=${identificationNumber}`
    );
  }

  public download(requestCode: string): Observable<Blob> {
    return this.httpClient.post(
      `${this.apiUrl}/patients/${requestCode}/pdf`,
      {},
      { responseType: 'blob' }
    )
  }

  public findByParameters(filter: Filter): Observable<Array<Patient>> {
    let objString = '?';
    if (filter.startDate && filter.endDate) {
      objString = objString + `startDate=${filter.startDate}&endDate=${filter.endDate}`
    }
    if (filter.identificationType) {
      objString = objString + `identificationType=${filter.identificationType}`
    }
    if (filter.identificationNumber) {
      objString = objString + `identificationNumber=${filter.identificationNumber}`
    }
    if (filter.name) {
      objString = objString + `name=${filter.name}`
    }
    if (filter.lastName) {
      objString = objString + `lastName=${filter.lastName}`
    }
    return this.httpClient.get<Array<Patient>>(
      `${this.apiUrl}/labs${objString}`
    );
  }

}
