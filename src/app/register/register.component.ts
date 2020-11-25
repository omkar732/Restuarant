import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  alert:Boolean=false;
  userRestuarant=new FormGroup({
    name:new FormControl(''),
    Password:new FormControl(''),
    Email:new FormControl(''),


  })

  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  createUser(){
   console.log(this.userRestuarant.value)
   this.resto.userRestuarant(this.userRestuarant.value).subscribe((result)=>{
     console.log(result,"Data Created sucessfully")
   })
  }

}
