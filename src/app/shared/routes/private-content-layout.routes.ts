import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ProfileComponent } from 'app/profile/profile.component';

//Route for content layout with sidebar, navbar and footer
export const PRIVATE_CONTENT_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];