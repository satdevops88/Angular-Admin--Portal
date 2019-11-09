import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { RecoverPasswordRoutingModule } from "./recover-password-routing.module";

import { RecoverPasswordComponent } from "./recover-password.component";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RecoverPasswordRoutingModule
    ],
    exports: [],
    declarations: [ RecoverPasswordComponent ],
    providers: [],
})
export class RecoverPasswordModule { }
