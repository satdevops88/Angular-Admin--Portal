import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    private apiBaseUrl: string;
    private actionUrl: string;
    private service: string;

    constructor(private http: HttpClient) {
    }

}

