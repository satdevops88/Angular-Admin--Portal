import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { AdvertisementComponent } from 'app/advertisement/advertisement.component';

//Route for content layout with sidebar, navbar and footer
export const PUBLIC_CONTENT_ROUTES: Routes = [
  {
    path: 'forgot-password',
    loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
  },
  {
    path: 'recover-password',
    loadChildren: './recover-password/recover-password.module#RecoverPasswordModule'
  },
  {
    path: 'confirm-signup',
    loadChildren: './confirm-signup/confirm-signup.module#ConfirmSignupModule'
  },
  {
    path: 'login',
    // loadChildren: './login/login.module#LoginModule'
    component: LoginComponent
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'advertisement',
    component: AdvertisementComponent
  },
  {
    path: 'not-found',
    loadChildren: './notfound/notfound.module#NotFoundModule'
    // loadChildren: './field-campaign/field-campaign.module#FieldCampaignModule'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];