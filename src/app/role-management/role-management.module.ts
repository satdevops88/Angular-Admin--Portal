import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RoleManagementRoutingModule } from "./role-management-routing.module";
import { CreateRoleComponent } from "./create-role/create-role.component";
import { PermissionsManagementComponent } from "./permissions-management/permissions-management.component";
import { RolesManagementComponent } from "./roles-management/roles-management.component";
import { UpdateRoleComponent } from "./update-role/update-role.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoleManagementRoutingModule,
    NgxDatatableModule,
    NgbModule
  ],
  exports: [],
  declarations: [
    PermissionsManagementComponent,
    CreateRoleComponent,
    RolesManagementComponent,
    UpdateRoleComponent
  ],
  providers: []
})
export class RoleManagementModule {}
