/**
 * Publiers APP
 * @author Aaron Dominguez <aaron@nube53.com>
 * @version 1.0.0
 * @description
 */

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class ApiService {

    private apiBaseUrl: string;
    private actionUrl: string;
    private service: string;

    constructor(private http: HttpClient) {
        this.apiBaseUrl = environment.apiUrl;
    }

    public setService(service: string) {
        this.service = service;
        this.actionUrl = this.apiBaseUrl + this.service;
    }

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(itemId: string): Observable<T> {
        return this.http.get<T>(this.actionUrl + itemId);
    }

    public add<T>(toAdd: any): Observable<T> {
        const add = JSON.stringify(toAdd);
        console.log(this.actionUrl);
        console.log(add);
        return this.http.post<T>(this.actionUrl, add);
    }

    public update<T>(itemId: string, itemToUpdate: any): Observable<T> {
        console.log(this.actionUrl + itemId);
        console.log(JSON.stringify(itemToUpdate));

        return this.http
            .put<T>(this.actionUrl + itemId, JSON.stringify(itemToUpdate));
    }

    public delete<T>(itemId: string): Observable<T> {
        return this.http.delete<T>(this.actionUrl + itemId);
    }
}


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        req = req.clone({ headers: req.headers.set('Authorization', this.authService.getToken()) });

        return next.handle(req);
    }
}
