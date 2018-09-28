import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myData;
  token;

  logOut()
  {
    this.myData = null;
    this.service.logOut(this.token).subscribe(
        data=>{
          // console.log(data);
        },
        error=>{
          // console.log(error);
        }
    )
    this.route.navigate(['']);
    localStorage.clear();
  }

  constructor(private service:DataTransferService,private route: Router) { }

  ngOnInit() {
    this.myData = JSON.parse(localStorage.getItem('userData'));
    this.token = JSON.parse(localStorage.getItem('token'));
  }

}
