import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectMessagesComponent } from './list-messages/direct-messages.component';
import { MessageDetailsComponent } from './message-details/message-details.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: DirectMessagesComponent,
                data: {
                    title: 'Direct Messages'
                }
            },
            {
                path: 'view-details',
                component: MessageDetailsComponent,
                data: {
                    title: 'Message Details'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DirectMessagesRoutingModule { }
