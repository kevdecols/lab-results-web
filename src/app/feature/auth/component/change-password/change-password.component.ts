import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthField } from '../../enum/auth-field.enum';
import { NavigationRoute } from 'src/app/shared/constant/navigation-route.constant';
import { AuthService } from '../../service/auth.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { AuthStorageService } from 'src/app/shared/service/auth-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {

  public fields = AuthField;
  public formGroup: FormGroup;
  public submitted: boolean;
  public routes = NavigationRoute;
  public request: boolean;

  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
    private alertService: AlertService,
    private authStorageService: AuthStorageService
  ) { }

  ngOnInit() {
    this.request = true;
    this.initForm();
  }

  private initForm() {
    const user = this.authStorageService.getAuthenticatedUser();
    this.formGroup = new FormGroup({
      [AuthField.IDENTIFICATION]: new FormControl(user.email, [Validators.required]),
      [AuthField.PASSWORD]: new FormControl(null, [Validators.required]),
      [AuthField.PASSWORD_CONFIRMATION]: new FormControl(null, [Validators.required]),
    }, { validators: this.checkPasswords })

  }

  public onChange() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.getRawValue();
    this.authService.changePassword(values).subscribe(() => {
      this.alertService.showSuccessful(
        'Se ha actualizado la contraseña exitosamente',
        'Importante'
      );
      this.activeModal.close();
    })
  }

  public get controls() {
    return this.formGroup.controls;
  }

  private checkPasswords(group: FormGroup) {
    const password = group.get(AuthField.PASSWORD)?.value;
    const confirmPassword = group.get(AuthField.PASSWORD_CONFIRMATION)?.value;
    if (password && confirmPassword) {
      const equals = password === confirmPassword;
      if (!equals) {
        group.get(AuthField.PASSWORD).setErrors({ 'required': true });
        group.get(AuthField.PASSWORD_CONFIRMATION).setErrors({ 'required': true });
      } else {
        group.get(AuthField.PASSWORD).setErrors(null)
        group.get(AuthField.PASSWORD_CONFIRMATION).setErrors(null)
      }
      return equals ? null : { notSame: true };
    } else {
      return null;
    }
  }
  
}
