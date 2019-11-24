import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-roles-management',
  templateUrl: './roles-management.component.html',
  styleUrls: ['./roles-management.component.scss']
})
export class RolesManagementComponent {

  rows = [
    { roles: "Admin" },
    { roles: "Moderator" },
    { roles: "Admin User" }
  ];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Roles' },
    { name: 'Actions' }
  ];
  selected = [];
  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.temp = [...this.rows];
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.roles.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  onDeleteRole(rowIndex) {
    this.toastr.success("Deleted Successfully", "Success");
  }

  onUpdateRole(rowIndex) {
    this.router.navigate(['role-management/update-role/2']);
  }

  onCreateRole() {
    this.router.navigate(['role-management/create-role']);
  }
}