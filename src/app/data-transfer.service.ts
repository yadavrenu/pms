import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs'
import {HttpClient } from '@angular/common/http';
import { HttpHeaders } from '../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  url='http://127.0.0.1:8000/api/auth/';
  url2='http://127.0.0.1:8000/api/players';

  options={
    headers : new HttpHeaders({
     'Content-Type' :'application/json',
     'Accept':'application/json'
     })}

  signUp(data):Observable<any> //Creates a player
  {
    return this.http.post(this.url2,data,this.options);
  }

  login(data):Observable<any> //For the Admin to login
  {
    return this.http.post(this.url+'login', data, this.options );
  }

  showData():Observable<any> //Gets all existing Players
  {
    return this.http.get(this.url2,this.options);
  }

  delete(player):Observable<any> //Deletes a particular player
  {
    return this.http.delete(this.url2+'/'+player,this.options);
  }

  constructor(private http:HttpClient) { }
}
