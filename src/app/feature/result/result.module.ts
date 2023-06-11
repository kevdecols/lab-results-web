import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './component/result.component';
import { ResultRoutingModule } from './result-routing.module';
import { ResultApiService } from './service/result-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientExamsComponent } from './component/patient-exams/patient-exams.component';
import { PatientsInfoComponent } from './component/patients-info/patients-info.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ResultRoutingModule
  ],
  declarations: [
    ResultComponent,
    PatientExamsComponent,
    PatientsInfoComponent
  ],
  providers: [
    ResultApiService
  ]
})
export class ResultModule { }
