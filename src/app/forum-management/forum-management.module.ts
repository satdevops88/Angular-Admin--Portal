import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ForumManagementRoutingModule } from './forum-management-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumCategoriesComponent } from './forum-categories/forum-categories.component';
import { ForumThreadsComponent } from './forum-threads/forum-threads.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ForumManagementRoutingModule,
        NgxDatatableModule,
        NgbModule
    ],
    exports: [],
    declarations: [
        ForumCategoriesComponent,
        ForumThreadsComponent
    ],
    providers: [],
})
export class ForumManagementModule { }
