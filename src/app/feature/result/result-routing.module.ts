import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationRoute } from '../../shared/constant/navigation-route.constant';
import { AuthGuard } from '../../core/guard/auth.guard';
import { ResultComponent } from './component/result.component';
import { PatientExamsComponent } from './component/patient-exams/patient-exams.component';
import { PatientsInfoComponent } from './component/patients-info/patients-info.component';


const routes: Routes = [
  {
    path: '',
    component: ResultComponent,
    children: [
      {
        path: NavigationRoute.PATIENT_EXAMS,
        component: PatientExamsComponent
      },
      {
        path: NavigationRoute.PATIENT_INFO,
        component: PatientsInfoComponent
      },
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
