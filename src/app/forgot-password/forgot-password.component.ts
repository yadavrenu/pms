import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  fPass=true;

  newPassword(form: NgForm)
  {
    console.log(form.value.email);
    localStorage.setItem('fEmail',JSON.stringify(form.value.email));
    this.service.newPassword(form.value.email).subscribe( //sends a request to generate new password
      data=>{
        console.log(data);
        this.route.navigate(['resetPassword']);
      },
      error=>{
        console.log(error);
      }
    )

  }

  constructor(private route:Router,
    private service:DataTransferService) { }

  ngOnInit() {
  }

}
