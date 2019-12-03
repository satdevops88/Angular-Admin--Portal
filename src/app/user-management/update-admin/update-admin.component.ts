import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoleApiService } from 'services/roleApi';
import { UserApiService } from 'services/userApi';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})

export class UpdateAdminComponent implements OnInit {
  roles = [];
  selectedRoles = "";
  admin_id: String;
  adminInfo: any = {};
  adminForm: FormGroup;
  avatar = ""

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private roleApi: RoleApiService, private userApi: UserApiService) {

  }

  ngOnInit() {
    this.roleApi.getAllRoles().then(roles => {
      roles.data.forEach(role => {
        this.roles.push(role.role_name);
      });
    })

    this.adminForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      last_name: ['', Validators.required],
      display_name: ['', Validators.required],
      email_address: ['', Validators.required],
      country: [''],
      // role_id: {
      //   role_name: ['']
      // }
    })
    this.admin_id = this.route.params['value'].userid;
    this.retrieveUserData();
    // this.retrieveUserPosts(this.user_id, 1, 10)
  }

  retrieveUserData() {
    this.userApi.getUser(this.admin_id).then(user => {
      this.adminInfo = user.data;
      this.avatar = this.adminInfo.profile_image.media_url;
      this.adminForm.setValue({
        first_name: this.adminInfo.first_name,
        middle_name: this.adminInfo.middle_name,
        last_name: this.adminInfo.last_name,
        display_name: this.adminInfo.display_name,
        email_address: this.adminInfo.email_address,
        country: this.adminInfo.country,
        // role_id: {
        //   role_name: this.adminInfo.role_id.role_name
        // }
      })
      this.selectedRoles = this.adminInfo.role_id.role_name;
    }).catch(error => {
      console.log('error', error);
    })
  }

  onChangeRole(newValue) {
    // this.adminForm.value['role_id']['role_name'] = newValue;
    this.selectedRoles = newValue;
  }
  onCancel() {
    this.router.navigate(['user-management/admins'])
  }
  onUpdate() {
    this.adminForm['role_id'] = { role_name: this.selectedRoles }
    var responsePayload = ['_id', 'display_name', 'first_name', 'middle_name', 'last_name', 'gender',
      { key: 'profile_image', fields: ['media_url', 'media_type', 'thumbnail_url', 'width', 'height'] },
      { key: 'role_id', fields: ['role_name', 'role_slug', 'role_permission'] },
      'email_address', 'phone_number', 'country', 'follows', 'followings', 'created_at'];
    var params = { data: this.adminForm.value, id: this.admin_id }
    this.userApi.updateUser(responsePayload, params).then(user => {
      this.retrieveUserData();
      this.toastr.success('Updated Admin User Successfully', 'Success');
      this.router.navigate(['user-management/admins']);
    })

  }

}
