import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';

import { RegisterRoutingModule } from "./register-routing.module";

import { RegisterComponent } from "./register.component";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RegisterRoutingModule
    ],
    exports: [],
    declarations: [ RegisterComponent ],
    providers: [],
})
export class RegisterModule { }
