import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FileUploadModule } from "ng2-file-upload";

import { ProfileRoutingModule } from "./profile-routing.module";

import { ProfileComponent } from "./profile.component";
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FormsModule,
        FileUploadModule
    ],
    exports: [],
    declarations: [ ProfileComponent ],
    providers: [],
})
export class ProfileModule { }
