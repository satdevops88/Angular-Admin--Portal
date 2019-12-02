import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'services/userApi';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {

  rows = [];
  page = {
    totalElements: 0,
    pageNumber: 0,
    size: 10
  }
  filterVal = "";
  constructor(private userApi: UserApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.setPage({ offset: 0 })
  }

  onBlock(rowIndex) {
    this.rows[rowIndex].activated = false;
  }

  onUnblock(rowIndex) {
    this.rows[rowIndex].activated = true;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.filterVal = val;
    this.setPage({ offset: 0 })
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    if (this.filterVal == "") {
      this.userApi.getAllUsers(this.page.pageNumber + 1, 10).then(result => {
        this.rows = result.data;
        this.page.totalElements = result.meta.totalDocument;
      }).catch(error => {
        console.log('error', error);
        this.rows = [];
        this.page.totalElements = 0;
      })
    } else {
      this.userApi.filterUser(this.filterVal, this.page.pageNumber + 1, 10).then(result => {
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
