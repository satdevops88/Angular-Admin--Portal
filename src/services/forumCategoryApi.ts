import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { MakeRequestService } from './makeRequest';

const apiUri = environment.curl; // <-- add the URL of the GraphQL server here
const accessToken = new HttpHeaders({
  "x-access-token": environment.token
})

@Injectable()
export class ForumCategoryApiService {

  constructor(private http: HttpClient, private makeRequest: MakeRequestService) {
  }

  getAllForumCategories(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveAllForumCategory', responsePayload, params);
    console.log(query);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveAllForumCategory,
              meta: json['meta']
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  getAllCategorySubCategory(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveAllCategorySubCategory', responsePayload, params);
    console.log(query);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveAllCategorySubCategory,
              meta: json['meta']
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }
}

