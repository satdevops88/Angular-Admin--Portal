import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleManagementComponent } from './role-management/role-management.component';
import { CreateRoleComponent } from './create-role/create-role.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'set-permissions',
                component: RoleManagementComponent,
                data: {
                    title: 'Set Permission'
                }
            },
            {
                path: 'create-role',
                component: CreateRoleComponent,
                data: {
                    title: 'Create Role'
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
