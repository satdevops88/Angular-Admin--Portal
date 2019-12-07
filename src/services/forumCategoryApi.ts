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

  //Category
  getAllForumCategories(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveAllForumCategory', responsePayload, params);
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

  getOneForumCategories(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveForumCategory', responsePayload, params);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveForumCategory
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  createForumCategory(responsePayload: any, params: any, fileToUpload: File): Promise<any> {
    var mutation = this.makeRequest.makeRequest('mutation', 'createForumCategory', responsePayload, params);
    const formData = new FormData();
    formData.append('query', mutation);
    formData.append('media', fileToUpload);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, formData, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].createForumCategory
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  updateForumCategory(responsePayload: any, params: any, fileToUpload: File): Promise<any> {
    var mutation = this.makeRequest.makeRequest('mutation', 'updateForumCategory', responsePayload, params);
    const formData = new FormData();
    formData.append('query', mutation);
    if (fileToUpload) {
      formData.append('media', fileToUpload);
    }
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, formData, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].updateForumCategory
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  //SubCategory
  getAllCategorySubCategory(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveAllCategorySubCategory', responsePayload, params);
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

  getOneForumSubCategories(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveForumSubCategory', responsePayload, params);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveForumSubCategory
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  createForumSubCategory(responsePayload: any, params: any, fileToUpload: File): Promise<any> {
    var mutation = this.makeRequest.makeRequest('mutation', 'createForumSubCategory', responsePayload, params);
    const formData = new FormData();
    formData.append('query', mutation);
    formData.append('media', fileToUpload);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, formData, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].createForumSubCategory
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  updateForumSubCategory(responsePayload: any, params: any): Promise<any> {
    var mutation = this.makeRequest.makeRequest('mutation', 'updateForumSubCategory', responsePayload, params);
    console.log('mutation', mutation);
    const formData = new FormData();
    formData.append('query', mutation);
    // if (fileToUpload) {
    //   formData.append('media', fileToUpload);
    // }
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, formData, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].updateForumSubCategory
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  //Threads
  getAllThread(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveAllThread', responsePayload, params);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveAllThread,
              meta: json['meta']
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  filterThread(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'filterThread', responsePayload, params);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].filterThread,
              meta: json['meta']
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  getOneThread(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveThread', responsePayload, params);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveThread
            });
          }
        },
        error => {
          reject(error);
        })
    })
  }

  getAllThreadPost(responsePayload: any, params: any): Promise<any> {
    var query = this.makeRequest.makeRequest('query', 'retrieveAllThreadPost', responsePayload, params);
    return new Promise((resolve, reject) => {
      this.http.post(apiUri, { query: query }, { headers: accessToken }).subscribe(
        json => {
          if (json['status'] == "success") {
            resolve({
              data: json['data'].retrieveAllThreadPost,
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

