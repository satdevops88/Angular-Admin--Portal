import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PrivateContentLayoutComponent } from "./layouts/private-content/private-content-layout.component";
import { PublicContentLayoutComponent } from "./layouts/public-content/public-content-layout.component";

import { PRIVATE_CONTENT_ROUTES } from "./shared/routes/private-content-layout.routes";
import { PUBLIC_CONTENT_ROUTES } from "./shared/routes/public-content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '', component: PrivateContentLayoutComponent, data: { title: 'private content views' }, children: PRIVATE_CONTENT_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: PublicContentLayoutComponent, data: { title: 'public content views' }, children: PUBLIC_CONTENT_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy : PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
