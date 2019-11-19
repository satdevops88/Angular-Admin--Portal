import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNewsComponent } from './list-news/list-news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'news',
                component: ListNewsComponent,
                data: {
                    title: 'News List'
                }
            },
            {
                path: 'create-news',
                component: CreateNewsComponent,
                data: {
                    title: 'Create News'
                }
            },
            {
                path: 'update-news/:newsID',
                component: UpdateNewsComponent,
                data: {
                    title: 'Update News'
                }
            },
            {
                path: 'news-details/:newsID',
                component: UpdateNewsComponent,
                data: {
                    title: 'News Details'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsManagementRoutingModule { }
