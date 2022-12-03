import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService) { 
  }

  login(payload: any){
    let header = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // Authorization: 'my-auth-token',
        })
      };
    return this.httpService.postService("/user/login", payload, false, header )
  }

  signup(payload: any){
    let header = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // Authorization: 'my-auth-token',
        })
      };
  return this.httpService.postService("/user/userSignUp", payload, false, header )
  }


  forget(payload:any){
    let header = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // Authorization: 'my-auth-token',
        })
      };
  return this.httpService.postService("/user/reset", payload, false,header )
  }

  reset(payload:any){
    let header = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // Authorization: 'my-auth-token',
        })
      };
  return this.httpService.postService("/user/reset-password", payload, false,header )
  }

} 
