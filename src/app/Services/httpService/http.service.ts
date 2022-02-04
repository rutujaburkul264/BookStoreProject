import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl= environment.baseurl

  constructor(private http:HttpClient) { }

  post(url : any ,data: any = null,token: boolean = false,httpoptions : any = {}) {
    console.log("data is in http service",data)
    return this.http.post(this.baseurl+url,data,token && httpoptions)
  }

  get(url:any,token:boolean=false,httpoptions:any ={}){
    return this.http.get(this.baseurl+url,token && httpoptions)
  }

  put(url : any ,data: any = null,token: boolean = false,httpoptions : any = {}){
    return this.http.put(this.baseurl+url,data,token && httpoptions)
  }

  delete(url : any ,data: any = null,token: boolean = false,httpoptions : any = {}){
    return this.http.delete(this.baseurl+url,token && httpoptions)
  }
}

