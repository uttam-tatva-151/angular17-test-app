import { Routes } from '@angular/router';
import { SecureLayoutComponent } from './secure-layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

export const secureRoutes: Routes = [
    {
        path: '',
        component: SecureLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
              path: 'dashboard', component : DashboardComponent
            },
            {path: '**', redirectTo: 'dashboard' }
        ]
    },

];
