import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restuarant',
  templateUrl: './add-restuarant.component.html',
  styleUrls: ['./add-restuarant.component.css']
})
export class AddRestuarantComponent implements OnInit {
  alert:Boolean=false;
  addRestuarant=new FormGroup({
    name:new FormControl(''),
    Adress:new FormControl(''),
    Mobile:new FormControl(''),
    Email:new FormControl(''),


  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
    
    }
    createResto(){
      //console.log(this.addRestuarant.value);
      this.resto.addResto(this.addRestuarant.value).subscribe((result)=>{
        this.alert=true;
        this.addRestuarant.reset({});
        console.log("Get Data from service",result)
      })
    }
    closeAlert(){
      this.alert=false;

    }
    resetForm(){
      this.addRestuarant.reset();
    }

  }


