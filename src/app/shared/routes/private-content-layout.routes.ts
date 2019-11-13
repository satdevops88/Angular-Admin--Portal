import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { UserPostComponent } from 'app/user-post/user-post.component';
import { NotificationComponent } from 'app/notification/notification.component';
import { ForumManagementComponent } from 'app/forum-management/forum-management.component';
import { DirectMessageComponent } from 'app/direct-message/direct-message.component';
import { AdvertisementComponent } from 'app/advertisement/advertisement.component';
import { NewsManagementComponent } from 'app/news-management/news-management.component';
import { RoleManagementComponent } from 'app/role-management/role-management.component';
import { EventManagementComponent } from 'app/event-management/event-management.component';

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
    component: ForumManagementComponent
  },
  {
    path: 'news-management',
    component: NewsManagementComponent
  },
  {
    path: 'direct-message',
    component: DirectMessageComponent
  },
  {
    path: 'user-management',
    loadChildren: './user-management/user-management.module#UserManagementModule'
  },
  {
    path: 'role-management',
    component: RoleManagementComponent
  },
  {
    path: 'event-management',
    component: EventManagementComponent
  }
];