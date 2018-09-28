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

  matchToken(form: NgForm)
  {
    var myToken= form.value.token;
    this.service.verifyEmail(this.myData.data.id,myToken).subscribe(
      data=>{
        // console.log(data);
        alert('Email confirmed. Login to your new account');
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
    this.myData = JSON.parse(localStorage.getItem("registeredData"));
  }

}
