import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { ForgotPasswordRoutingModule } from "./forgot-password-routing.module";

import { ForgotPasswordComponent } from "./forgot-password.component";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ForgotPasswordRoutingModule
    ],
    exports: [],
    declarations: [ ForgotPasswordComponent ],
    providers: [],
})
export class ForgotPasswordModule { }
