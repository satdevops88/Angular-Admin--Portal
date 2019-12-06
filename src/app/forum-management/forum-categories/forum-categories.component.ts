import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../forum-categories.config';
import { ToastrService } from 'ngx-toastr';
import { ForumCategoryApiService } from 'services/forumCategoryApi';

@Component({
  selector: 'app-forum-categories',
  templateUrl: './forum-categories.component.html',
  styleUrls: ['./forum-categories.component.scss']
})
export class ForumCategoriesComponent {

  rows = [];
  subrows = [];
  page = {
    totalElements: 0,
    pageNumber: 0,
    size: 10
  }
  subpage = {
    totalElements: 0,
    pageNumber: 0,
    size: 20
  }
  selected = [];
  selectedCategory = "";
  constructor(private forumCategoryApi: ForumCategoryApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.setPage({ offset: 0 })
  }
  onSelect({ selected }) {
    console.log('selected', selected);
    console.log('this.selected', this.selected);
    this.selectedCategory = this.selected[0].category;
    var subResponsePayload = ['_id', 'subcategory', 'threads', 'subscribed', 'createdAt',
      { key: 'forum_subcategory_media', fields: ['media_url', 'width', 'height', 'tags'] }];
    var subParams = { id: this.selected[0]._id, page: 1, limit: 20 };
    this.forumCategoryApi.getAllCategorySubCategory(subResponsePayload, subParams).then(subResult => {
      console.log('subResult', subResult);
      this.subrows = subResult.data;
      this.subpage.totalElements = subResult.meta.totalDocument;
    })
  }

  onViewThreads(rowIndex) {
    this.router.navigate(['forum-management/threads'])
  }

  onSubUpdate(rowIndex) {
    this.router.navigate(['forum-management/update-categories/' + this.selected[0].name + '/' + this.subrows[rowIndex].name]);
  }

  onSubDelete(rowIndex) {
    if (confirm('Are you sure to delete "' + this.subrows[rowIndex].title + '" SubCategory ?')) {
      this.toastr.success('Deleted SubCategory Successfully', 'Success');
    }
  }

  onCreateSubCategories() {
    this.router.navigate(['forum-management/create-categories/' + this.selected[0].name]);
  }

  onUpdate(row) {
    this.router.navigate(['forum-management/update-categories/' + row._id + '/all']);
  }

  onDelete(row) {
    if (confirm('Are you sure to delete "' + row.category + '" Category ?')) {
      this.toastr.success('Deleted Category Successfully', 'Success');
    }
  }

  onCreateCategories() {
    this.router.navigate(['forum-management/create-categories/new']);
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    var responsePayload = ['_id', 'category', 'slug',
      { key: 'forum_category_media', fields: ['media_url', 'height', 'width', 'thumbnail_url'] },
      'threads', 'createdAt'];
    var params = { page: this.page.pageNumber + 1, limit: 10 }
    this.forumCategoryApi.getAllForumCategories(responsePayload, params).then(result => {
      this.rows = result.data;
      this.page.totalElements = result.meta.totalDocument;
      this.selected = [this.rows[0]];
      this.onSelect(result)

    }).catch(error => {
      console.log('error', error);
      this.rows = [];
      this.page.totalElements = 0;
    })
  }
}
