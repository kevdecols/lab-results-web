import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { NavigationRoute } from '../../shared/constant/navigation-route.constant';
import { ChangePasswordComponent } from './component/change-password/change-password.component';

const routes: Routes = [
  {
    path: NavigationRoute.LOGIN,
    component: LoginComponent
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    ChangePasswordComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
