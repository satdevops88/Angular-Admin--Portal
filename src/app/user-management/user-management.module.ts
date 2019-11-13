import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UserManagementRoutingModule } from './user-management-routing.module';
import { ListUsersComponent } from './users/list-users.component';
import { ListAdminsComponent } from './admins/list-admins.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule } from '@angular/forms';
import { UpdateAdminComponent } from './update-admin/update-admin.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserManagementRoutingModule,
        NgxDatatableModule
    ],
    exports: [],
    declarations: [
        ListUsersComponent,
        ListAdminsComponent,
        AddAdminComponent,
        UpdateAdminComponent
    ],
    providers: [],
})
export class UserManagementModule { }
