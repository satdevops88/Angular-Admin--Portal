import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoleComponent } from './create-role/create-role.component';
import { PermissionsManagementComponent } from './permissions-management/permissions-management.component';
import { RolesManagementComponent } from './roles-management/roles-management.component';
import { UpdateRoleComponent } from './update-role/update-role.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'permissions-management',
                component: PermissionsManagementComponent,
                data: {
                    title: 'Permissions Management'
                }
            },
            {
                path: 'create-role',
                component: CreateRoleComponent,
                data: {
                    title: 'Create Role'
                }
            },
            {
                path: 'roles-management',
                component: RolesManagementComponent,
                data: {
                    title: 'Roles Management'
                }
            },
            {
                path: 'update-role/:roleID',
                component: UpdateRoleComponent,
                data: {
                    title: 'Update Role'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoleManagementRoutingModule { }
