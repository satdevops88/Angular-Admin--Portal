import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumCategoriesComponent } from './forum-categories/forum-categories.component';
import { ForumThreadsComponent } from './forum-threads/forum-threads.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'categories',
                component: ForumCategoriesComponent,
                data: {
                    title: 'Categories'
                }
            },
            {
                path: 'threads',
                component: ForumThreadsComponent,
                data: {
                    title: 'Threads'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ForumManagementRoutingModule { }
