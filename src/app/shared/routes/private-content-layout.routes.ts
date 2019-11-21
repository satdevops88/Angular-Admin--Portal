import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { UserPostComponent } from 'app/user-post/user-post.component';
import { NotificationComponent } from 'app/notification/notification.component';
import { AdvertisementComponent } from 'app/advertisement/advertisement.component';
import { EventManagementComponent } from 'app/event-management/event-management.component';
import { ReportManagementComponent } from 'app/report-management/report-management.component';

//Route for content layout with sidebar, navbar and footer
export const PRIVATE_CONTENT_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'advertisement',
    component: AdvertisementComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'user-post',
    component: UserPostComponent
  },
  {
    path: 'forum-management',
    loadChildren: './forum-management/forum-management.module#ForumManagementModule'
  },
  {
    path: 'news-management',
    loadChildren: './news-management/news-management.module#NewsManagementModule'
  },
  {
    path: 'direct-message',
    loadChildren: './direct-messages/direct-messages.module#DirectMessagesModule'
  },
  {
    path: 'user-management',
    loadChildren: './user-management/user-management.module#UserManagementModule'
  },
  {
    path: 'role-management',
    loadChildren: './role-management/role-management.module#RoleManagementModule'
  },
  {
    path: 'event-management',
    component: EventManagementComponent
  },
  {
    path: 'report-management',
    component: ReportManagementComponent
  }
];