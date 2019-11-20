import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectMessagesRoutingModule } from './direct-messages-routing.module';
import { DirectMessagesComponent } from './list-messages/direct-messages.component';
import { MessageDetailsComponent } from './message-details/message-details.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DirectMessagesRoutingModule,
        NgxDatatableModule,
        NgbModule
    ],
    exports: [],
    declarations: [
        DirectMessagesComponent,
        MessageDetailsComponent
    ],
    providers: [],
})
export class DirectMessagesModule { }
