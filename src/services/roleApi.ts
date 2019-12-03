import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

const apiUri = environment.curl; // <-- add the URL of the GraphQL server here
const accessToken = new HttpHeaders({
  "x-access-token": environment.token
})

@Injectable()
export class RoleApiService {

  constructor(private http: HttpClient) {

  }
  getAllRoles(): Promise<any> {
    var query = 'query {getAllRoles {_id role_name role_slug role_permission}}';
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].getAllRoles,
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

