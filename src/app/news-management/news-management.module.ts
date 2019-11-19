import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListNewsComponent } from './list-news/list-news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsManagementRoutingModule } from './news-management-routing.module';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NewsManagementRoutingModule,
        NgxDatatableModule,
        NgbModule
    ],
    exports: [],
    declarations: [
        ListNewsComponent,
        CreateNewsComponent,
        UpdateNewsComponent,
        NewsDetailsComponent
    ],
    providers: [],
})
export class NewsManagementModule { }
