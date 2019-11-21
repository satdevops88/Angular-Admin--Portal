import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent {

  @ViewChild('f') rolesForm: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.rolesForm.setValue({
        role: "Admin"
      })
    }, 100);
  }

  onCancel() {
    this.router.navigate(['role-management/roles-management']);
  }
  onUpdate() {
    this.router.navigate(['role-management/roles-management']);
    this.toastr.success('Update Role Successfully', 'Success');
  }
}
