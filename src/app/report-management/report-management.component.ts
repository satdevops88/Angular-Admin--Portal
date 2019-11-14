import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.scss']
})
export class ReportManagementComponent {

  rows = [
    // { node: 'Sngine', type: 'michael', user: "Rotary Power", time: "5 April 2019", actions: "" },
  ];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Node' },
    { name: 'Type' },
    { name: 'Reported By' },
    { name: 'Reported Count' },
    { name: 'Time' },
    { name: 'Actions' },
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
    if (confirm('Are you sure to delete Admin User ?')) {
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
