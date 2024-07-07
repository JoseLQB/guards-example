import { inject } from '@angular/core';
import { CanActivateFn, CanMatch, CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.isAuth()){
    return true;
  }else{
    const urlTreeReturn = router.createUrlTree(['/login']);
    return urlTreeReturn;
  }
};

export const authGuardMatch: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAuth();

}
