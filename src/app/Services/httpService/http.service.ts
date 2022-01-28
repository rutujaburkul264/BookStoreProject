import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl= environment.baseurl

  constructor(private http:HttpClient) { }

  post(url:any,data:any,token:boolean=false,httpoptions:any ={}){
    console.log(data)
    return this.http.post(this.baseurl+url,data,token && httpoptions)
  }

  get(url:any,token:boolean=false,httpoptions:any ={}){
    return this.http.get(this.baseurl+url,token && httpoptions)
  }

  put(){}

  delete(){}
}

