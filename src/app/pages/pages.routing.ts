import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalComponent } from './modal/modal.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { AdminComponent } from './admin/admin.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PersonasComponent } from './personas/personas.component';
import { ParametrosComponent } from './parametros/parametros.component';

const routes: Routes = [

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }

  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'resultados', component: ResultadosComponent },
      { path: 'personas', component: PersonasComponent },
      { path: 'parametros', component: ParametrosComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
