import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs'
import {HttpClient } from '@angular/common/http';
import { HttpHeaders } from '../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  url='http://127.0.0.1:8000/api/';

  options={
    headers : new HttpHeaders({
     'Content-Type' :'application/json',
     'Accept':'application/json'
     })}

  options2={
    headers : new HttpHeaders({
      'COntent-Type' : 'application/x-www-form-urlencoded'
    })
  }

  signUp(data):Observable<any> //Creates a player
  {
    return this.http.post(this.url+'register',data,this.options);
  }

  login(data):Observable<any> //For the Admin to login
  {
    return this.http.post(this.url+'login', data, this.options );
  }

  getToken(id):Observable<any>
  {
    return this.http.get(this.url+'token/'+id,this.options);
  }

  verifyEmail(id):Observable<any>
  {
    return this.http.get(this.url+'verify/'+id,this.options);
  }

  getUser(token):Observable<any>
  {
    return this.http.get(this.url+'user?token='+token,this.options);
  }

  logOut(token):Observable<any>
  {
    return this.http.post(this.url+'logout','&token='+token,this.options);
  }

  constructor(private http:HttpClient) { }
}
