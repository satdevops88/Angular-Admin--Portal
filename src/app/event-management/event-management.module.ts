import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventManagementRoutingModule } from './event-management-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EventManagementRoutingModule,
        NgxDatatableModule,
        NgbModule
    ],
    exports: [],
    declarations: [
        CreateEventComponent,
        ListEventsComponent,
        UpdateEventComponent
    ],
    providers: [],
})
export class EventManagementModule { }
