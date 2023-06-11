import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DomainNames } from 'src/app/shared/enum/domain-names.enum';
import { Domain } from 'src/app/shared/model/domain';
import { User } from 'src/app/shared/model/user';
import { AuthStorageService } from 'src/app/shared/service/auth-storage.service';
import { DomainApiService } from 'src/app/shared/service/domain-api.service';
import { ResultApiService } from '../../service/result-api.service';
import { Patient } from '../../model/patient';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patients-info',
  templateUrl: './patients-info.component.html',
  styleUrls: ['./patients-info.component.css']
})
export class PatientsInfoComponent implements OnInit {

  public formGroup: FormGroup;

  public indentificationTypes: Array<Domain>;

  public user: User;

  public patients: Array<Patient>;

  constructor(
    private domainApiService: DomainApiService,
    private authStorageService: AuthStorageService,
    private resultApiService: ResultApiService
  ) { }

  ngOnInit() {
    this.user = this.authStorageService.getAuthenticatedUser();
    this.initForm();
    this.findIdentificationTypes()
  }

  private initForm() {
    this.formGroup = new FormGroup({
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      identificationType: new FormControl(null),
      identificationNumber: new FormControl(null),
      name: new FormControl(null),
      lastName: new FormControl(null),
    });
  }

  
  private findIdentificationTypes() {
    this.domainApiService.findActivesByName(DomainNames.IDENTIFICATION_TYPE).subscribe(resp => {
      this.indentificationTypes = resp;
    })
  }

  public get controls() {
    return this.formGroup.controls;
  }

  public onFind() {
    const filter = this.formGroup.getRawValue();
    const startDate = this.formGroup.get('startDate').value;
    const endDate = this.formGroup.get('endDate').value;
    filter.startDate = this.getFormatedDate(startDate);
    filter.endDate = this.getFormatedDate(endDate);
    this.resultApiService.findByParameters(filter).subscribe(resp=> {
      this.patients = resp;
    })
  }

  private getFormatedDate(date: NgbDate) {
    return date.year + '-'
      + (date.month > 9 ? date.month : '0' + date.month) + '-'
      + (date.day > 9 ? date.day : '0' + date.day)
  }

}
