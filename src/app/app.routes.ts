import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';    
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
    {
        path: 'login',
        component: Login
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
