import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from 'services/userApi';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.scss']
})
export class ListAdminsComponent {

  rows = [];
  page = {
    totalElements: 0,
    pageNumber: 0,
    size: 10
  }
  filterVal = "";

  constructor(private toastr: ToastrService, private router: Router, private userApi: UserApiService) {

  }

  ngOnInit() {
    this.setPage({ offset: 0 })
  }

  onAddAdmin() {
    localStorage.removeItem('newAdmin');
    this.router.navigate(['user-management/add-admin'])
  }

  onUpdate(rowIndex) {
    console.log('rowIndex', rowIndex);
    this.router.navigate(['user-management/update-admin/' + rowIndex])
  }

  onDelete(rowIndex) {
    if (confirm('Are you sure to delete ' + this.rows[rowIndex].name + ' Admin User ?')) {
      this.toastr.success('Deleted Admin User Successfully', 'Success');
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.filterVal = val;
    this.setPage({ offset: 0 })
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    if (this.filterVal == "") {
      this.userApi.getAllAdminUsers(this.page.pageNumber + 1, 10).then(result => {
        this.rows = result.data;
        this.page.totalElements = result.meta.totalDocument;
      }).catch(error => {
        console.log('error', error);
        this.rows = [];
        this.page.totalElements = 0;
      })
    } else {
      this.userApi.filterAdminUser(this.filterVal, this.page.pageNumber + 1, 10).then(result => {
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
