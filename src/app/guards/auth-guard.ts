import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';


// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const authService = inject(AuthService);

  // const token = localStorage.getItem('token');

  // if (token) {
  //   return true;
  // }

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};


/*
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};

*/