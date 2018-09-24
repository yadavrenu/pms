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
  players: any = [];


  addPlayer()
  {
    this.route.navigate(['signUp']);
  }

  showData()
  {
    this.service.showData().subscribe(
      data=>{
        console.log(data);
        this.players=data;
      },
      error=>{
        alert("Records not found");
      }
    )
  }

  logOut()
  {
    this.myData = null;
    this.route.navigate(['']);
    localStorage.clear();
  }

  delete(player)
  {
    this.service.delete(player).subscribe(
      data=>{
        console.log(data);
        alert("Player Deleted");
        // this.route.navigate(['']);
        window.location.reload();

      },
      error=>{
        alert("Records not found");
      }
    )
  }

  constructor(private service:DataTransferService,private route: Router) { }

  ngOnInit() {
    this.myData = JSON.parse(localStorage.getItem("userData"));
    this.showData();
  }

}
