import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(public http: HttpClient, public tokenService: TokenService) { }


}
