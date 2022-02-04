import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../Services/AuthGuardService/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthGuardService, private router: Router){}

  canActivate(): boolean {
     if (!this.Authguardservice.gettoken()) {
       this.router.navigateByUrl("/login");
     }
     return this.Authguardservice.gettoken();
   }
}
