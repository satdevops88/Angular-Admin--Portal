import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    @ViewChild('f') loginForm: NgForm;

    email = '';
    password = '';
    rememberme = true;
    token = '';

    constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthService) {

    }

    // On submit button click    
    onSubmit() {
        // this.authenticationService.signinUser(this.email, this.password);
        console.log("dashboard");
        this.router.navigate(['dashboard']);
        // console.log(this.authenticationService.getToken());
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgot-password']);
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register']);
    }
}