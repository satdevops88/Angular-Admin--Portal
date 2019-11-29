import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

const apiUri = environment.curl; // <-- add the URL of the GraphQL server here
const accessToken = new HttpHeaders({
  "x-access-token": environment.token
})

@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) {

  }

  getAllUsers(page, limit): Promise<any> {
    var query = 'query {getAllUsers(page: ' + page + ', limit: ' + limit + ') {_id first_name last_name display_name email_address created_at status}}';
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].getAllUsers,
              meta: json['meta']
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  filterUser(queryString: String, page: Number, limit: Number): Promise<any> {
    var query = 'query {filterUser(queryString: "' + queryString + '",page: ' + page + ', limit: ' + limit + ') {_id first_name last_name display_name email_address created_at status}}';
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].filterUser,
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

