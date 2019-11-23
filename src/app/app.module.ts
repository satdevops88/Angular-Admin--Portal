import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { PublicContentLayoutComponent } from "./layouts/public-content/public-content-layout.component";
import { PrivateContentLayoutComponent } from "./layouts/private-content/private-content-layout.component";

import { AuthService } from './shared/auth/auth.service';
import { StorageService } from './shared/api/storage.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { ApiService, RequestInterceptor } from './shared/api/api.service';

import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChartistModule } from 'ng-chartist';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { UserPostComponent } from './user-post/user-post.component';
import { NotificationComponent } from './notification/notification.component';
import { ReportManagementComponent } from './report-management/report-management.component';


@NgModule({
    declarations: [
        AppComponent,
        PrivateContentLayoutComponent,
        PublicContentLayoutComponent,
        LoginComponent,
        DashboardComponent,
        AdvertisementComponent,
        NotificationComponent,
        ProfileComponent,
        UserPostComponent,
        ReportManagementComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        NgbModule.forRoot(),
        HttpClientModule,
        ToastrModule.forRoot(),
        ChartistModule,
        NgxDatatableModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        StorageService,
        ApiService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }