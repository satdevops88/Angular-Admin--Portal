import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-confirm-signup',
    templateUrl: './confirm-signup.component.html',
    styleUrls: ['./confirm-signup.component.scss']
})

export class ConfirmSignupComponent {
    @ViewChild('f') confirmsignupForm: NgForm;

    fname = '';
    inputcode = '';

    constructor(private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthService,
        private toastr: ToastrService
    ) { }

    // On submit click, reset form fields
    onSubmit() {
        //console.log(this.inputcode);
        //this.confirmsignupForm.reset();
    }

    // On login link click
    onSendCode() {
        console.log(this.inputcode);
        this.fname = localStorage.getItem('username');
        if (this.inputcode == '')
            this.toastr.error('Please input Verification Code');
        if (this.fname != '' && this.inputcode != '')
            this.authenticationService.signupConfirmation(this.fname, this.inputcode);

    }

    onResendCode() {
        this.fname = localStorage.getItem('username');
        this.authenticationService.resendCode(this.fname);
    }

    // On registration link click
    onLogin() {
        this.router.navigate(['login']);
    }

    // On cancel link click
    onCancel() {
        this.router.navigate(['register']);
    }

}