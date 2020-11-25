import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  Email:string;
  Password:string;

  constructor(private resto:CommonService, private router:Router) { }

  ngOnInit(): void {
  }
  logIn(){
    if(this.Email == "admin@gmail.com" && this.Password =="Admin@123"){
     this.router.navigate(["./list"]);
    }
    else{
      alert("Please Enter Valid Details");
    }
    }

}
