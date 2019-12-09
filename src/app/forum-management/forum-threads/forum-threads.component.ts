import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForumCategoryApiService } from 'services/forumCategoryApi';

@Component({
  selector: 'app-forum-threads',
  templateUrl: './forum-threads.component.html',
  styleUrls: ['./forum-threads.component.scss']
})
export class ForumThreadsComponent {

  rows = [];
  page = {
    totalElements: 0,
    pageNumber: 0,
    size: 10
  }
  filterVal = "";
  selected = [];

  constructor(private forumCategoryApi: ForumCategoryApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.setPage({ offset: 0 })
  }
  onCombineThreads() {
    if (this.selected.length < 2) {
      this.toastr.warning('Select at leact 2 Threads', 'Warning');
    } else {
      this.toastr.success('Combined Successfully', 'Success');
    }
  }
  onUpdateThreadStatus(row, status) {
    console.log('row', row);
    if (status == 'active') {
      console.log('active...')
    } else {

    }
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.filterVal = val;
  }

  onFilter() {
    this.setPage({ offset: 0 })
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    var responsePayload = ['_id', { key: 'categoryId', fields: ['_id', 'category', 'threads'] },
      { key: 'subcategoryId', fields: ['_id', 'subcategory', 'threads'] },
      { key: 'reference', fields: ['reference_type'] }, { key: 'thread_media', fields: ['tags', 'media_url', 'width', 'height'] },
      'title', 'titleSlug', 'content', 'status', 'likes', 'liked', 'subscribed', 'posts', 'views', 'isDuplicate',
      { key: 'createdBy', fields: [{ key: 'profile_image', fields: ['media_url'] }, 'display_name'] }, 'createdAt'];
    if (this.filterVal == "") {
      var params = { page: this.page.pageNumber + 1, limit: 10 }
      this.forumCategoryApi.getAllThread(responsePayload, params).then(result => {
        console.log('result', result);
        this.rows = result.data;
        this.page.totalElements = result.meta.totalDocument;
      }).catch(error => {
        console.log('error', error);
        this.rows = [];
        this.page.totalElements = 0;
      })
    } else {
      var filterParams = { queryString: this.filterVal, status: "active", page: this.page.pageNumber + 1, limit: 10 }
      this.forumCategoryApi.filterThread(responsePayload, filterParams).then(result => {
        this.rows = result.data;
        this.page.totalElements = result.meta.totalDocument;
      }).catch(error => {
        console.log('error', error);
        this.rows = [];
        this.page.totalElements = 0;
      })
    }
  }
}
