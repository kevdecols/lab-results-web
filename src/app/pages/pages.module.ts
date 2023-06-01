import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { AdminComponent } from './admin/admin.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PersonasComponent } from './personas/personas.component';
import { ParametrosComponent } from './parametros/parametros.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ProfileComponent,
    ModalComponent,
    AdminComponent,
    EmpresaComponent,
    ResultadosComponent,
    PersonasComponent,
    ParametrosComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    ProfileComponent,
    ModalComponent,
    AdminComponent,
    EmpresaComponent,
    ResultadosComponent,
    PersonasComponent,
    ParametrosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
