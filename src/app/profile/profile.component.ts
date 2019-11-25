import { Component, ViewChild, OnInit } from '@angular/core';
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

  constructor(private authenticationService: AuthService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.currentUserId = this.authenticationService.getCurrentUserId();
    this.currentUsername = this.authenticationService.getCurrentUsername();
    // this.email = this.currentUsername;
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
