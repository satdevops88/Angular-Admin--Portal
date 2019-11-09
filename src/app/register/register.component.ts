import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    @ViewChild('f') registerForm: NgForm;

    fname = '';
    email = '';
    password = '';
    register_result = [];
    checkbox = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthService,
        private toastr: ToastrService) {

    }

    //  On submit click, reset field value
    onSubmit() {
        // if(this.checkbox){
            this.authenticationService.signupUser(this.email, this.password, this.email);
        // }else{
        //     this.toastr.info('You must check Terms and Conditions');
        // }

        //this.registerForm.reset();
    }
}