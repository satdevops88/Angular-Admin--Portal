import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const PRIVATE_CONTENT_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }
];