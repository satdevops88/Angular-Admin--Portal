import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {
  @ViewChild('f') adminForm: NgForm;
  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('userID', this.route.params['value'].userid)
    setTimeout(() => {
      this.adminForm.setValue({
        email: "testadmin@tontrends.com",
        name: "Test Admin",
        username: "testadmin"
      })
    }, 100);
  }

  onCancel() {
    this.router.navigate(['user-management/admins'])
  }
  onUpdate() {
    this.toastr.success('Updated Admin User Successfully', 'Success');
    this.router.navigate(['user-management/admins']);
  }


}
