import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataTransferService } from '../data-transfer.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUp(form: NgForm)
  {
    // console.log(form.value);
    var myJson= JSON.stringify(form.value);
    // console.log(myJson);
    this.service.signUp(myJson).subscribe(
      data=>{
        // console.log('this is what i want',data);
        localStorage.setItem("registeredData",JSON.stringify(data));
        this.route.navigate(['verifyEmail']);
      },
      error=>{
        alert('Invalid data');
      }
    )
  }
  constructor(private route:Router,
              private service:DataTransferService) { }

  ngOnInit() { }

}
