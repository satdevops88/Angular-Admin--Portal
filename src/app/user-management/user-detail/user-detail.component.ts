import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from 'services/userApi';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  public user_id: String;
  public userInfo: any = {};
  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private userApi: UserApiService) {

  }

  ngOnInit() {
    this.user_id = this.route.params['value'].userid;
    this.userApi.getUser(this.user_id).then(user => {
      this.userInfo = user.data;
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
