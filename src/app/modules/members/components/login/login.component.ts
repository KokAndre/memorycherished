import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes, ModalTypes } from 'src/app/enums/app.enums';
import { LoginRequest } from 'src/app/models/login-request.model';
import { AppModalService } from 'src/app/services/app-modal/app-modal.service';
import { LoginService } from 'src/app/services/login/login.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public hidePin = true;

  constructor(public formBuilder: FormBuilder,
    public loginService: LoginService,
    public router: Router,
    public appModalService: AppModalService,
    public tokenService: TokenService) { }

  ngOnInit() {
    this.initializeLoginControls();
  }

  public initializeLoginControls() {
    this.loginFormGroup = this.formBuilder.group({
      loginEmailControl: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,24})$')]),
      loginPasswordControl: new FormControl('', [Validators.required]),
    });
  }

  public loginClicked() {
    const requestData = new LoginRequest();
    requestData.email = this.loginEmailControl?.value;
    requestData.password = this.loginPasswordControl?.value;

    this.loginService.loginUser(requestData).subscribe(results => {
      this.tokenService.setToken(results.access_token);
      this.appModalService.ShowConfirmationModal(ModalTypes.InformationModal, 'Login', 'You have successfully logged in.', null);
    }, error => {
      console.log('ERROR: ', error);
      this.appModalService.ShowConfirmationModal(ModalTypes.InformationModal, 'Login', error.error.message, null);
    });
  }

  public cancelClicked() {
    this.router.navigateByUrl(AppRoutes.Home);
  }



  public get loginEmailControl() {
    return this.loginFormGroup.get('loginEmailControl');
  }
  public get loginPasswordControl() {
    return this.loginFormGroup.get('loginPasswordControl');
  }
}
