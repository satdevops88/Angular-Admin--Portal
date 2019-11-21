import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent {

  @ViewChild('f') newsForm: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {

  }

  onCancel() {
    this.router.navigate(['role-management/set-permissions']);
  }
  onCreate() {
    this.router.navigate(['role-management/set-permissions']);
    this.toastr.success('Created Role Successfully', 'Success');
  }
}
