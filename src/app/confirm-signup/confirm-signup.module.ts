import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { ConfirmSignupRoutingModule } from "./confirm-signup-routing.module";

import { ConfirmSignupComponent } from "./confirm-signup.component";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ConfirmSignupRoutingModule
    ],
    exports: [],
    declarations: [ ConfirmSignupComponent ],
    providers: [],
})
export class ConfirmSignupModule { }
