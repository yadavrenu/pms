import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name;
  password;

  public login(form: NgForm)
  {
    var myJson= JSON.stringify(form.value);
    console.log(myJson);

    this.service.login(myJson).subscribe(
      data=>{
        console.log(data);
        if(data.access_token){
          localStorage.setItem("userData",myJson);
          this.route.navigate(['admin']);
        }
      },
      error=>{
        alert("Enter Valid Details");
      }
    )

  }

  constructor(private route:Router,
              private service:DataTransferService) { }

  ngOnInit() {
  }

}
