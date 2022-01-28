import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }

  Signup(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpservice.post("registration",data,true,header)
  }
  
  login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpservice.post("login",data,true,header)
  }
}
