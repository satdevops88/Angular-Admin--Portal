import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from 'services/userApi';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public user_id: String;
  public userInfo: any = {};
  public userPosts: any = [];
  public currentPostPage = 0;
  public totalPostPage = 0;
  public avatar = "";

  userForm: FormGroup;

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private userApi: UserApiService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
      phone_number: ['', Validators.required],
      country: ['', Validators.required]
    })
    this.user_id = this.route.params['value'].userid;
    this.retrieveUserData();
    this.retrieveUserPosts(this.user_id, 1, 10)
  }

  retrieveUserPosts(_id: String, page: Number, limit: Number) {
    this.userApi.retrieveUserUpdates(_id, page, limit).then(posts => {
      this.currentPostPage = posts.meta.currentPage;
      this.totalPostPage = posts.meta.totalPage;
      posts.data.forEach(post => {
        this.userPosts.push(post);
      });
    })
  }

  retrieveUserData() {
    this.userApi.getUser(this.user_id).then(user => {
      this.userInfo = user.data;
      this.avatar = this.userInfo.profile_image.media_url;
      this.userForm.setValue({
        first_name: this.userInfo.first_name,
        last_name: this.userInfo.last_name,
        email_address: this.userInfo.email_address,
        phone_number: this.userInfo.phone_number,
        country: this.userInfo.country
      })
    }).catch(error => {
      console.log('error', error);
    })
  }

  onUpdateProfile() {
    this.userApi.updateUser(this.user_id, this.userForm.value).then(user => {
      this.retrieveUserData();
      this.toastr.success("Updated Successfully", "Success");
    })
  }
  onReadMorePost() {
    this.retrieveUserPosts(this.user_id, ++this.currentPostPage, 10)
  }
}
