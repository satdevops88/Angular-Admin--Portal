import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmSignupComponent } from "./confirm-signup.component";

const routes: Routes = [
  {
    path: '',
     component: ConfirmSignupComponent,
    data: {
      title: 'Confirm Signup'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmSignupRoutingModule { }
