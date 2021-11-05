import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../shared/service/login.service';
import { AuthenticationCredentials } from '../../shared/models/authentication-credentials';
import { LocalStorageService } from '../../shared/service/local-storage.service';
import { TOKEN_STORAGE_KEY } from '../../shared/utils/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, private loginService: LoginService, private storageService: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.loginForm = this.initLoginForm();
    this.loginForm = this.buildLoginForm();
  }

  private initLoginForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required]})
    });
  }

  private buildLoginForm(): FormGroup {
    return this.fb.group({
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      password: ['', {validators: [Validators.required]}]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const authCredentials: AuthenticationCredentials = this.loginForm.value;
      this.loginService.login(authCredentials).subscribe((authUser) => {
        this.storageService.setItem(TOKEN_STORAGE_KEY, authUser.token);
        this.router.navigate(['/']).then();
      });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
