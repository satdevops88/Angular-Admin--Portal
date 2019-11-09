import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  currentUserId: string = '';
  currentUsername: string = '';

  name: string = '';
  sname: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  postal: string = '';
  country: string = '';
  bname: string = '';
  iban: string = '';
  ppaddress: string = '';
  tlink: string = '';
  flink: string = '';
  ilink: string = '';

  userInfo = {
    Id: '',
    Name: '',
    LastName: '',
    Email: '',
    Phone: '',
    Address: '',
    City: '',
    PostalCode: '',
    Country: '',
    BankName: '',
    IBAN: '',
    PaypalAddress: '',
    TwitterLink: '',
    FacebookLink: '',
    InstagramLink: ''

  }

  constructor(
    private apiUserService: ApiService,
    private authenticationService: AuthService,
    private toastr: ToastrService
  ) {
    this.apiUserService.setService('users/');
  }

  ngOnInit() {
    this.currentUserId = this.authenticationService.getCurrentUserId();
    this.currentUsername = this.authenticationService.getCurrentUsername();
    // this.email = this.currentUsername;
    this.apiUserService.getSingle(this.currentUserId).subscribe(data => {
      this.userInfo = data['item'];
      this.name = this.userInfo.Name;
      this.sname = this.userInfo.LastName;
      this.email = this.userInfo.Email;
      this.phone = this.userInfo.Phone;
      this.address = this.userInfo.Address;
      this.city = this.userInfo.City;
      this.postal = this.userInfo.PostalCode;
      this.country = this.userInfo.Country;
      this.bname = this.userInfo.BankName;
      this.iban = this.userInfo.IBAN;
      this.ppaddress = this.userInfo.PaypalAddress;
      this.tlink = this.userInfo.TwitterLink;
      this.flink = this.userInfo.FacebookLink;
      this.ilink = this.userInfo.InstagramLink;

      console.log(data['item']);
    })
  }
  onSave() {

    this.userInfo.Id = this.currentUserId;
    this.userInfo.Name = this.name;
    this.userInfo.LastName = this.sname;
    this.userInfo.Email = this.email;
    this.userInfo.Phone = this.phone;
    this.userInfo.Address = this.address;
    this.userInfo.City = this.city;
    this.userInfo.PostalCode = this.postal;
    this.userInfo.Country = this.country;
    this.userInfo.BankName = this.bname;
    this.userInfo.IBAN = this.iban;
    this.userInfo.PaypalAddress = this.ppaddress;
    this.userInfo.TwitterLink = this.tlink;
    this.userInfo.FacebookLink = this.flink;
    this.userInfo.InstagramLink = this.ilink;

    // this.apiUserService.delete("c22b7a51-5b56-4370-b1b7-34470066ddda").subscribe(data => console.log(data));

    this.apiUserService.update(this.currentUserId, this.userInfo).subscribe(data => {
      if (data['status'] == "ok")
        this.toastr.success("Successfully Saved");
      else
        this.toastr.error("Failed")
      console.log(data);
    });
    // this.apiUserService.getSingle(this.currentUserId).subscribe(data=> console.log(data));

  }

  onTwitter() {
    console.log("onTwitter");
    window.open(this.tlink);
  }

  onFacebook() {
    console.log("onFacebook");
    window.open(this.flink);
  }

  onInstagram() {
    console.log("onInstagram");
    window.open(this.ilink);
  }

  onCancel() {
    window.history.back();
  }

}
