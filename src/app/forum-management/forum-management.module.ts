import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ForumManagementRoutingModule } from './forum-management-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumCategoriesComponent } from './forum-categories/forum-categories.component';
import { ForumThreadsComponent } from './forum-threads/forum-threads.component';
import { UpdateCategoriesComponent } from './update-categories/update-categories.component';
import { ThreadsDatailComponent } from './threads-detail/threads-detail.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';




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
        ForumThreadsComponent,
        UpdateCategoriesComponent,
        CreateCategoriesComponent,
        ThreadsDatailComponent
    ],
    providers: [],
})
export class ForumManagementModule { }
