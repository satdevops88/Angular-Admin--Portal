import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
    selector: 'app-recover-password',
    templateUrl: './recover-password.component.html',
    styleUrls: ['./recover-password.component.scss']
})

export class RecoverPasswordComponent {
    @ViewChild('f') forogtPasswordForm: NgForm;

    code = '';
    newpassword = '';
    email = '';

    constructor(private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthService) { }

    // On submit click, reset form fields
    onSubmit() {
        console.log(this.email);
        console.log(this.code);
        console.log(this.newpassword);
        this.authenticationService.forgotPasswordConfirm(this.email, this.code, this.newpassword);
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