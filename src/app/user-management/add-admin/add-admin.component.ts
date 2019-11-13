import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  @ViewChild('f') adminForm: NgForm;


  constructor(private toastr: ToastrService, private router: Router) {

  }

  ngOnInit() {

  }

  onCancel() {
    this.router.navigate(['user-management/admins'])
  }
  onSave() {
    console.log('this.adminForm', this.adminForm);
    localStorage.setItem('newAdmin', JSON.stringify({
      email: this.adminForm.value.email,
      name: this.adminForm.value.name,
      username: this.adminForm.value.username
    }))
    this.toastr.success('Created New Admin Successfully', 'Success');
    this.router.navigate(['user-management/admins']);
  }


}
