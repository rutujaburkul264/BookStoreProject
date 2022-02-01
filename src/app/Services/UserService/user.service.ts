import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private httpservice:HttpService) {
   
   }

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

  updateAddress(data: any){
    this.token = localStorage.getItem('Token')
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpservice.put('edit_user',data,true,header)
  }
}
