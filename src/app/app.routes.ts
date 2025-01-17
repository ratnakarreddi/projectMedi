import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';   
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'forgot-password', component: ForgotPasswordComponent},
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {
        path: '',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
    { path: '**', component: NotFoundComponent },
    
];