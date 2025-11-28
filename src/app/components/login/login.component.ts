import { Component } from '@angular/core';
import { ILoginLabel, Labels } from './login.label';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginApiService } from 'src/app/api/login-api.service';
import { ApplicationDS } from 'src/app/store/applicationDS.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string = '';
  loading = false;
  get language() {
    return this.applicationDS.language;
  }

  get labels(): ILoginLabel {
    return Labels[this.language];
  }
  get isAdmin() {
    return this.router.url.includes('admin');
  }

  constructor(
    private router: Router,
    private applicationDS: ApplicationDS,
    private loginApi: LoginApiService
  ) {}
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  async login() {
    this.loading = true;
    this.errorMessage = '';
    const formValue = this.loginForm.value;
    try {
      const data: any = await this.loginApi.Login(
        formValue.username,
        formValue.password
      );
      if (data.errorCode === 0) {
        localStorage.setItem('authorization', data.result.Authorization);
        localStorage.setItem('cellPhone', data.result.CellPhone);
        localStorage.setItem('email', data.result.Email);
        localStorage.setItem('officeCode', data.result.OfficeCode);
        localStorage.setItem('officeName', data.result.OfficeName);
        localStorage.setItem('officeType', data.result.OfficeType);
        localStorage.setItem('userFullName', data.result.UserFullName);
        localStorage.setItem('userID', data.result.UserID);
        localStorage.setItem('isLogin', 'true');
        this.router.navigate(['/dashboard']);
      }
      this.loading = false;
    } catch (error) {
      if (typeof error === 'string') {
        this.errorMessage = error.toString();
      } else if (error instanceof Error) {
        this.errorMessage = error.message;
      }
      this.loading = false;
    }
  }
}
