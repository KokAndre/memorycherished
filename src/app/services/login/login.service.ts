import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/enums/app.enums';
import { LoginRequest } from 'src/app/models/login-request.model';
import { RegisterRequest } from 'src/app/models/register-request.model';
import { AppModalService } from '../app-modal/app-modal.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // public loggedInUser: string;

  constructor(public http: HttpClient, public appModalService: AppModalService, public router: Router, public tokenService: TokenService) {
  }

  public registerUser(requestData: RegisterRequest) {
    return this.http.post(Endpoints.BaseURL + Endpoints.Register, { requestData: requestData }) as Observable<any>;
  }

  public loginUser(requestData: LoginRequest) {
    return this.http.post(Endpoints.BaseURL + Endpoints.Login, { requestData: requestData }) as Observable<any>;
  }

}
