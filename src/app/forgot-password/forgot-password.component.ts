import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
    @ViewChild('f') forogtPasswordForm: NgForm;

    email = '';

    constructor(private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthService) { }

    // On submit click, reset form fields
    onSubmit() {
        console.log(this.email);
        this.authenticationService.forgotPassword(this.email);
        //this.forogtPasswordForm.reset();
    }

    // On login link click
    onLogin() {

        this.router.navigate(['login']);
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register']);
    }

    // On cancel link click
    onCancel() {
        this.router.navigate(['login']);
    }

}