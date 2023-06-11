import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './shared/component/page/page.component';
import { AuthGuard } from './core/guard/auth.guard';
import { NavigationRoute } from './shared/constant/navigation-route.constant';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children:[
      {
        path: NavigationRoute.RESULT,
        loadChildren: () => import('./feature/result/result.module').then( (m) => m.ResultModule)
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: NavigationRoute.AUTH,
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
