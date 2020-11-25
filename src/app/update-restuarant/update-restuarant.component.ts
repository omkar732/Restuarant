import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {
  alert:Boolean=false;
  editRestuarant=new FormGroup({
    name:new FormControl(''),
    Adress:new FormControl(''),
    Mobile:new FormControl(''),
    Email:new FormControl(''),


  })

  constructor(private resto:CommonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.editRestuarant=new FormGroup({
        name:new FormControl(result['name']),
        Adress:new FormControl(result['Adress']),
        Mobile:new FormControl(result['Mobile']),
        Email:new FormControl(result['Email'])
      })
      
    })
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id,this.editRestuarant.value).subscribe((result)=>{
    console.log(result,"Data Updated sucessfully")
    this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }

  

  }
