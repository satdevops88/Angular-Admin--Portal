import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.scss']
})
export class ListAdminsComponent {

  rows = [
    { name: 'Michael', username: 'michael', role: 'Admin', joined: '1 January 2019', actions: '' },
    { name: 'Shamnex', username: 'shamnex', role: 'Moderator', joined: '4 April 2019', actions: '' },
    { name: 'Sonxai', username: 'sonxai', role: 'Admin User', joined: '11 November 2019', actions: '' },
  ];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Name' },
    { name: 'Username' },
    { name: 'Role' },
    { name: 'Joined' },
    { name: 'Actions' }
  ];

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.temp = [...this.rows];
  }

  onAddAdmin() {
    localStorage.removeItem('newAdmin');
    this.router.navigate(['user-management/add-admin'])
  }

  onUpdate(rowIndex) {
    this.router.navigate(['user-management/update-admin/' + rowIndex])
  }

  onDelete(rowIndex) {
    if (confirm('Are you sure to delete ' + this.rows[rowIndex].name + ' Admin User ?')) {
      this.toastr.success('Deleted Admin User Successfully', 'Success');
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

}
