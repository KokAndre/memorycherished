import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageKeys } from 'src/app/enums/app.enums';
import { SessionStorageHelper } from 'src/app/helpers/app-helper.functions';
import { AppModalService } from '../app-modal/app-modal.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private issuer = {
    localLogin: 'http://localhost/memory-cherished-api/public/api/members/login',
    localRegister: 'http://localhost/memory-cherished-api/public/api/members/register'
  };

  constructor(public router: Router, public appModalService: AppModalService) { }

  public setToken(token: any) {
    console.log('TOKEN TO SET: ', token);
    SessionStorageHelper.storeItem(SessionStorageKeys.AuthToken, token);
  }

  public getToken(): string | null {
    const token = SessionStorageHelper.getItem(SessionStorageKeys.AuthToken);
    return token;
  }

  private isValidToken() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        const isValidISS = Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
        const hasTokenExpired = this.tokenExpired(payload);

        if (isValidISS && !hasTokenExpired) {
          return true;
        } else {
          // This can be added to redirect to the home component when a user is in a page
          // where only logged in members can access when the token expires
          // const currentRoute = this.router.url;
          // if (currentRoute.includes('/members')) {
          //   this.appModalService.CloseModal();
          //   this.router.navigateByUrl(AppRoutes.Home);
          // }
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private tokenExpired(payload: any) {
    const expiry = payload.exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  private payload(token: any) {
    const jwtPayload = token.split('.')[1];
    if (jwtPayload) {
      return JSON.parse(atob(jwtPayload));
    }
  }

  // User state based on valid token
  public isLoggedIn() {
    const isTokenValid = this.isValidToken();

    if (isTokenValid) {
      return true;
    } else {
      this.logoutUser();
      return false;
    }
  }

  // Remove token
  private removeToken() {
    // localStorage.removeItem('auth_token');
    SessionStorageHelper.removeItem(SessionStorageKeys.AuthToken);
  }

  public logoutUser() {
    this.removeToken();
  }
}
