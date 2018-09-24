import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataTransferService } from './data-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data=null;

  constructor(private auth:DataTransferService,private route:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      this.data= localStorage.getItem("userData");
      if(this.data===null){
       this.route.navigate(['']);
       return false;
      }
    return true;
  }
}
