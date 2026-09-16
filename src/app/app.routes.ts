import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';  
import { guestGuard } from './guards/guest-guard';   
import { Login } from './login/login';
import { Home } from './home/home';
import { About } from './about/about';
import { Users } from './users/users';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    // {
    //     path: 'login',
    //     component: Login
    // },
    {
        path: 'login',
        canActivate: [guestGuard],
        loadComponent: () =>
        import('./login/login').then(m => m.Login)
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        canActivate: [authGuard],
        loadComponent: ()=> import('./about/about').then(m => m.About)
    },
    {
        path: 'users/:id',
        component: Users
    },
    {
        path: 'users',
        component: Users
    }
];
