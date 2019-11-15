import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './users/list-users.component';
import { ListAdminsComponent } from './admins/list-admins.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'users',
                component: ListUsersComponent,
                data: {
                    title: 'Users'
                }
            },
            {
                path: 'admins',
                component: ListAdminsComponent,
                data: {
                    title: 'Admins'
                }
            },
            {
                path: 'add-admin',
                component: AddAdminComponent,
                data: {
                    title: 'Add Admin'
                }
            },
            {
                path: 'update-admin/:userid',
                component: UpdateAdminComponent,
                data: {
                    title: 'Update Admin'
                }
            },
            {
                path: 'user-detail/:userid',
                component: UserDetailComponent,
                data: {
                    title: 'User Detail'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserManagementRoutingModule { }
