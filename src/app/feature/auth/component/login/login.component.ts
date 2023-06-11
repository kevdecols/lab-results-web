import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthField } from '../../enum/auth-field.enum';
import { AuthService } from '../../service/auth.service';
import { NavigationRoute } from '../../../../shared/constant/navigation-route.constant';
import { AuthStorageService } from '../../../../shared/service/auth-storage.service';
import { Domain } from 'src/app/shared/model/domain';
import { DomainApiService } from '../../../../shared/service/domain-api.service';
import { DomainNames } from 'src/app/shared/enum/domain-names.enum';
import { UserTypes } from 'src/app/shared/enum/user-types.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public fields = AuthField;
  public formGroup: FormGroup;
  public submitted: boolean;
  public routes = NavigationRoute;

  public indentificationTypes: Array<Domain>

  constructor(
    private router: Router,
    private authService: AuthService,
    private authStorageService: AuthStorageService,
    private domainApiService: DomainApiService

  ) { }

  ngOnInit() {
    this.initForm();
    this.findIdentificationTypes();
  }


  private findIdentificationTypes() {
    this.domainApiService.findActivesByName(DomainNames.IDENTIFICATION_TYPE).subscribe(resp => {
      this.indentificationTypes = resp;
    })
  }

  private initForm() {
    this.formGroup = new FormGroup({
      [AuthField.IDENTIFICATION_TYPE]: new FormControl(null, [Validators.required]),
      [AuthField.IDENTIFICATION]: new FormControl(null, [Validators.required]),
      [AuthField.PASSWORD]: new FormControl(null, [Validators.required])
    })

  }

  public onSignIn() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.getRawValue();
    this.authService.signIn(values).subscribe((resp) => {
      const { token, user } = resp;
      console.log('user ', user);
      this.authStorageService.setAuthentication(user, token);
      if (user.type == UserTypes.PATIENT) {
        this.router.navigate([NavigationRoute.RESULT, NavigationRoute.PATIENT_EXAMS]);
      } else if (user.type == UserTypes.CLIENT) {
        this.router.navigate([NavigationRoute.RESULT, NavigationRoute.PATIENT_INFO]);
      }

    })
  }

  public get controls() {
    return this.formGroup.controls;
  }


}
