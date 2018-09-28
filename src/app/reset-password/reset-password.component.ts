import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  mail;

  resetPassword(form: NgForm) //lets the user reset password after providing token
  {
    // console.log(form.value);
    // console.log("this is the id passed",this.myData.data.id);
    var myToken= form.value.token;
    var myPassword=form.value.password;
    this.service.resetPassword(myPassword,myToken,this.mail).subscribe(
      data=>{
        // console.log(data);
        alert('Password has been changed. Login now with your new password. ');
        this.route.navigate(['']);
      },
      error=>{
        // console.log(error);
        alert(error);
      }
    )
  }

  constructor(private route:Router,
    private service:DataTransferService) { }

  ngOnInit() {
    this.mail=JSON.parse(localStorage.getItem("fEmail"));
  }

}
