import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  myData;

  matchToken(form: NgForm) //needs more logic
  {
    console.log(form.value);
    // console.log("this is the id passed",this.myData.data.id);
    var myToken= form.value.token;
    this.service.getToken(this.myData.data.id).subscribe(
      data=>{
        // console.log("this is the token recieved",data);
        // console.log("this is the entered",myToken);
        if(data.token==form.value.token){
          //set verified to 1
          this.service.verifyEmail(this.myData.data.id).subscribe(
            data2=>{
             console.log(data2);
            alert('Email confirmed. Login to your new account');
            this.route.navigate(['']);
            },
            error=>{
              console.log(error);
            }
          )
        }
        else
        alert('Wrong token');
      },
      error=>{
        alert("Enter Valid token");
      }
    )
  }

  constructor(private route:Router,
    private service:DataTransferService) { }

  ngOnInit() {

    this.myData = JSON.parse(localStorage.getItem("registeredData"));
  }

}
