import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  myData;
  token;
  allUsers: any=[];

  showAllUsers() //lists all the users created
  {
    this.service.showAllUsers(this.token).subscribe(
      data=>{
        console.log(data);
        this.allUsers=data.users;
        console.log('users',this.allUsers);
      },
      error=>{
        console.log(error);
      }
    )
  }

  logOut()
  {
    this.myData = null;
    this.service.logOut(this.token).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error);
        }
    )
    this.route.navigate(['']); //navigate to login page
    localStorage.clear();
  }

  constructor(private service:DataTransferService,private route: Router) { }

  ngOnInit() {
    this.myData = JSON.parse(localStorage.getItem('userData'));
    this.token = JSON.parse(localStorage.getItem('token'));
    console.log(this.myData);
    console.log(this.token);

    this.showAllUsers();
  }

}
