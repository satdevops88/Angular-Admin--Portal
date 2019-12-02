import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from 'services/userApi';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  public user_id: String;
  public userInfo: any = {};
  public avatar = "";
  @ViewChild('f') userdetailForm: NgForm;

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private userApi: UserApiService) {

  }

  ngOnInit() {
    this.user_id = this.route.params['value'].userid;
    this.userApi.getUser(this.user_id).then(user => {
      this.userInfo = user.data;
      this.avatar = this.userInfo.profile_image.media_url;
      this.userdetailForm.setValue({
        first_name: this.userInfo.first_name,
        last_name: this.userInfo.last_name,
        email_address: this.userInfo.email_address,
        phone_number: this.userInfo.phone_number,
        bio: this.userInfo.bio
      })
      console.log('this.userInfo', this.userInfo);
    }).catch(error => {
      console.log('error', error);
    })
  }

  onUpdateProfile() {
    this.router.navigate(['user-management/users']);
    this.toastr.success("Updated Successfully", "Success");
  }

}
