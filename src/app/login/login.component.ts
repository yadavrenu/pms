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
  user;

  public login(form: NgForm)
  {
    var myJson= JSON.stringify(form.value);
    this.service.login(myJson).subscribe(
      data=>{
        // console.log(data);
        if(data.token){
          // console.log(data.token);
          localStorage.setItem("token",JSON.stringify(data.token));
          this.service.getUser(data.token).subscribe(
            user=>{
              // console.log(user);
              localStorage.setItem("userData",JSON.stringify(user));
              if(form.value.email=='renuyadavcr@gmail.com')
                this.route.navigate(['admin']);
              else
                this.route.navigate(['user']);
            },
            error=>{
              alert('Invalid Details');
            }
          )
        }
      },
      error=>{
        alert('Invalid Details');
      }
    )
  }

  constructor(private route:Router,
              private service:DataTransferService) { }

  ngOnInit() {
  }

}
