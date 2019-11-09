import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import Amplify, { Auth } from 'aws-amplify';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  token: string;
  currentUser: any;

  constructor(private router: Router, private toastr: ToastrService) {
    Amplify.configure({
      Auth: {
        region: 'eu-central-1',
        userPoolId: 'eu-central-1_Xu9wkyrJW',
        userPoolWebClientId: '4rgedo14aelde4pubhassf11jd'
      }
    });
  }

  signupUser(username: string, password: string, email: string) {

    Auth.signUp({
      username,
      password,
      attributes: {
        email
      },
      validationData: []
    })
      .then(data => {
        console.log(data);
        this.toastr.success('Verification Code sent');
        localStorage.setItem('username', username);
        this.router.navigate(['confirm-signup']);
      })
      .catch(err => {
        if (err.code == "InvalidPasswordException") {
          if (err.message.includes("Password must have numeric characters"))
            this.toastr.info('Password must have numeric characters');
          else if (err.message.includes("Password must have lowercase characters"))
            this.toastr.info('Password must have lowercase characters');
          else {

          }

        } else if (err.code == "UsernameExistsException") {
          this.toastr.error('User already exists');

        } else if (err.code == "InvalidParameterException") {
          this.toastr.info('Password must have length greater than or equal to 6');

        } else {

        }
        console.log(err)
      });
  }

  signupConfirmation(username: string, code: string) {
    Auth.confirmSignUp(username, code, {
      forceAliasCreation: true
    })
      .then(data => {
        console.log(data);
        this.router.navigate(['login']);
        this.toastr.success('Successfully registed');

      })
      .catch(err => {
        console.log(err);
        this.toastr.error('Invalid Verication Code');
      });
  }

  signinUser(email: string, password: string) {
    Auth.signIn(email, password)
      .then(user => {
        this.token = user.signInUserSession.idToken.jwtToken;
        console.log(this.token);
        this.currentUserInfo();
        localStorage.setItem('authuser', email);
        this.router.navigate(['dashboard']);
        //this.resendCode(email);
      })
      .catch(err => {
        console.log(err);
        if (err.code == 'UserNotConfirmedException') {

        } else if (err.code == 'NotAuthorizedException') {
          this.toastr.error('Incorrect username or password');

        }
        else if (err.code == 'NetworkError') {
          this.toastr.error('Network Error')
        }
      });
  }

  resendCode(email: string) {
    Auth.resendSignUp(email)
      .then(data => {
        console.log(data);
        this.toastr.info('User is not confirmed. Please check your email!');
        localStorage.setItem('username', email);
        this.router.navigate(['confirm-signup']);
      })
      .catch(err => console.log(err))
  }

  logout() {
    this.token = null;

    Auth.signOut()
      .then(data => {
        localStorage.removeItem('authuser');

        this.router.navigate(['login']);
      })
      .catch(err => console.log(err));
  }

  currentUserInfo() {
    Auth.currentUserInfo()
      .then(data => {
        this.currentUser = data;
      })
      .catch(err => console.log(err));
  }

  getCurrentUserId() {
    return this.currentUser.attributes.sub;
  }

  getCurrentUsername() {
    return this.currentUser.username;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // return this.token !== null && this.token !== undefined;
    return true;
  }

  forgotPassword(username) {
    Auth.forgotPassword(username)
      .then(data => {
        this.toastr.success('Verification Code sent. Please check your email');
        this.router.navigate(['recover-password']);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
        this.toastr.error('Email address is not found. Try again.');
      });
  }

  forgotPasswordConfirm(username, code, newPassword) {
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then(data => {
        this.toastr.success('Your password changed successfully');
        this.router.navigate(['login']);
        console.log(data);
      })
      .catch(err => {
        if (err.code == 'ExpiredCodeException')
          this.toastr.error('Invalid Email provided. Try again!')
        else if (err.code == 'CodeMismatchException')
          this.toastr.error('Invalid Verification code. Try again!')
        else if (err.code == 'InvalidPasswordException') {
          if (err.message.includes("Password must have numeric characters"))
            this.toastr.info('Password must have numeric characters');
          else if (err.message.includes("Password must have lowercase characters"))
            this.toastr.info('Password must have lowercase characters');
          else {

          }
        } else {

        }
      });
  }

  changePassword(oldPassword, newPassword) {
    Auth.currentAuthenticatedUser()
      .then(user => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
