import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { AuthStorageService } from '../../shared/service/auth-storage.service';
import { NavigationRoute } from '../../shared/constant/navigation-route.constant';


export const AuthGuard = () => {
  const authStorageService = inject(AuthStorageService);
  const router = inject(Router);
  /*return authStorageService.isAuthenticated().pipe(
    take(1),
    tap(
      isLoggedIn => !isLoggedIn ? router.navigate([NavigationRoute.AUTH, NavigationRoute.LOGIN]) : true
    )
  )*/
  return true;
}