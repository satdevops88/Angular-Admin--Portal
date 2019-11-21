import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleManagementRoutingModule } from './role-management-routing.module';
import { RoleManagementComponent } from './role-management/role-management.component';
import { CreateRoleComponent } from './create-role/create-role.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RoleManagementRoutingModule,
        NgxDatatableModule,
        NgbModule
    ],
    exports: [],
    declarations: [
        RoleManagementComponent,
        CreateRoleComponent
    ],
    providers: [],
})
export class RoleManagementModule { }
