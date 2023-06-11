import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../../shared/model/user';
import { AuthStorageService } from 'src/app/shared/service/auth-storage.service';
import { PatientExam } from '../../model/patient-exam';
import { ResultApiService } from '../../service/result-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-exams',
  templateUrl: './patient-exams.component.html',
  styleUrls: ['./patient-exams.component.css']
})
export class PatientExamsComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  public user: User;

  public patientExams: Array<PatientExam>;

  constructor(
    private authStorageService: AuthStorageService,
    private resultApiService: ResultApiService
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.user = this.authStorageService.getAuthenticatedUser();
    this.find();
  }

  private find() {
    const sub = this.resultApiService.findByPatient(
      this.user.identificationType, this.user.identification
    ).subscribe(resp => {
      this.patientExams = resp;
    });
    this.subscription.add(sub);
  }

  public onDownloadResult(requestCode: string) {
    const sub = this.resultApiService.download(
      requestCode
    ).subscribe(resp => {
      console.log('resp ', resp);
      const nombreArchivo = requestCode + '.pdf';
      const url = window.URL.createObjectURL(resp);
      const donwloadLink = document.createElement('a');
      donwloadLink.href = url;
      donwloadLink.text = nombreArchivo;
      donwloadLink.target = '_blank';


      donwloadLink.setAttribute('name', nombreArchivo);
      donwloadLink.setAttribute('target', '_blank');
      document.body.appendChild(donwloadLink);
      donwloadLink.click();
      //const w = window.open(url);
    });
    this.subscription.add(sub);
  }
}
