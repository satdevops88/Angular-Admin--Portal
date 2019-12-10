import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { MakeRequestService } from "./makeRequest";

const apiUri = environment.curl; // <-- add the URL of the GraphQL server here
const accessToken = new HttpHeaders({
  "x-access-token": environment.token
});

@Injectable()
export class RoleApiService {
  constructor(
    private http: HttpClient,
    private makeRequest: MakeRequestService
  ) {}

  getAllRoles(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest(
      "query",
      "getAllRoles",
      responsePayload,
      params
    );
    return new Promise((resolve, reject) => {
      this.http
        .post(apiUri, { query: query }, { headers: accessToken })
        .subscribe(
          json => {
            if (json["status"] == "success") {
              resolve({
                data: json["data"].getAllRoles,
                meta: json["meta"]
              });
            }
          },
          error => {
            reject(error);
          }
        );
    });
  }

  getOneRole(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest(
      "query",
      "getRole",
      responsePayload,
      params
    );
    return new Promise((resolve, reject) => {
      this.http
        .post(apiUri, { query: query }, { headers: accessToken })
        .subscribe(
          json => {
            if (json["status"] == "success") {
              resolve({
                data: json["data"].getRole
              });
            }
          },
          error => {
            reject(error);
          }
        );
    });
  }

  createNewRole(responsePayload: any, params: any): Promise<any> {
    var mutation = this.makeRequest.makeRequest(
      "mutation",
      "createRole",
      responsePayload,
      params
    );
    return new Promise((resolve, reject) => {
      this.http
        .post(apiUri, { query: mutation }, { headers: accessToken })
        .subscribe(
          json => {
            if (json["status"] == "success") {
              resolve({
                data: json["data"].createRole
              });
            }
          },
          error => {
            reject(error);
          }
        );
    });
  }

  updateRole(responsePayload: any, params: any): Promise<any> {
    var mutation = this.makeRequest.makeRequest(
      "mutation",
      "updateRole",
      responsePayload,
      params
    );
    return new Promise((resolve, reject) => {
      this.http
        .post(apiUri, { query: mutation }, { headers: accessToken })
        .subscribe(
          json => {
            if (json["status"] == "success") {
              resolve({
                data: json["data"].updateRole
              });
            }
          },
          error => {
            reject(error);
          }
        );
    });
  }

  deleteRole(responsePayload: any, params: any): Promise<any> {
    var mutation = this.makeRequest.makeRequest(
      "mutation",
      "deleteRole",
      responsePayload,
      params
    );
    return new Promise((resolve, reject) => {
      this.http
        .post(apiUri, { query: mutation }, { headers: accessToken })
        .subscribe(
          json => {
            if (json["status"] == "success") {
              resolve({
                data: json["data"].deleteRole
              });
            }
          },
          error => {
            reject(error);
          }
        );
    });
  }
}
