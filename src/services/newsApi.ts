import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { MakeRequestService } from "./makeRequest";

const apiUri = environment.curl; // <-- add the URL of the GraphQL server here
const accessToken = new HttpHeaders({
  "x-access-token": environment.token
});

@Injectable()
export class NewsApiService {
  constructor(
    private http: HttpClient,
    private makeRequest: MakeRequestService
  ) {}

  //News
  getAllNews(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest(
      "query",
      "retrieveAllNews",
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
                data: json["data"].retrieveAllNews,
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

  filterNews(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest(
      "query",
      "filterNews",
      responsePayload,
      params
    );
    console.log("query", query);
    return new Promise((resolve, reject) => {
      this.http
        .post(apiUri, { query: query }, { headers: accessToken })
        .subscribe(
          json => {
            if (json["status"] == "success") {
              resolve({
                data: json["data"].filterNews,
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
}
