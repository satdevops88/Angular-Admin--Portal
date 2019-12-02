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
  //Users
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

  getUser(_id: String): Promise<any> {
    var query = 'query {getUser(id: "' + _id + '") {_id display_name first_name middle_name last_name gender ' +
      'profile_image { media_url media_type thumbnail_url width height } ' + 'email_address phone_number country followers followings created_at}}';
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].getUser
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

  updateUser(_id: String, data: any): Promise<any> {
    var updateData = '{';  //{###}
    var row = '';
    for (var key in data) {
      if (data.hasOwnProperty(key) && data[key]) {
        row = key + ': "' + data[key] + '" ';
        updateData += row;
      }
    }
    updateData += '}';
    var mutation = 'mutation {updateUser(data: ' + updateData + ' id: "' + _id + '" ) {_id}}';

    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: mutation }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].updateUser
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  retrieveUserUpdates(_id: String, page: Number, limit: Number): Promise<any> {
    var query = 'query {retrieveUserUpdates(id: "' + _id + '",page: ' + page + ', limit: ' + limit + ') {_id media{media_type media_url height width thumbnail_url}update_content status likes dislikes comments shares created_at updated_at}}';
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveUserUpdates,
              meta: json['meta']
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  //Admin Users
  getAllAdminUsers(page, limit): Promise<any> {
    var query = 'query {getAllAdminUsers(page: ' + page + ', limit: ' + limit + ') {_id first_name middle_name last_name display_name email_address role_id{role_name role_slug role_permission} created_at status}}';
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].getAllAdminUsers,
              meta: json['meta']
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  filterAdminUser(queryString: String, page: Number, limit: Number): Promise<any> {
    var query = 'query {filterAdminUser(queryString: "' + queryString + '",page: ' + page + ', limit: ' + limit + ') {_id first_name middle_name last_name display_name email_address role_id{role_name role_slug role_permission} created_at status}}';
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].filterAdminUser,
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

