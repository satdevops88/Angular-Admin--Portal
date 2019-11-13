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
    { name: 'Michael', username: 'michael', joined: '1 January 2019', actions: '' },
    { name: 'Shamnex', username: 'shamnex', joined: '4 April 2019', actions: '' },
    { name: 'Sonxai', username: 'sonxai', joined: '11 November 2019', actions: '' },
  ];
  columns = [
    { name: 'ID' },
    { name: 'Name' },
    { name: 'Username' },
    { name: 'Joined' },
    { name: 'Actions' }
  ];

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

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

}
