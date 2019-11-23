import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'create-event',
                component: CreateEventComponent,
                data: {
                    title: 'Create Event'
                }
            },
            {
                path: 'list-events',
                component: ListEventsComponent,
                data: {
                    title: 'List Events'
                }
            },
            {
                path: 'update-event/:eventID',
                component: UpdateEventComponent,
                data: {
                    title: 'Update Event'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EventManagementRoutingModule { }
