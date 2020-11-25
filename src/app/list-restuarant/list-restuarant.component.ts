import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-restuarant',
  templateUrl: './list-restuarant.component.html',
  styleUrls: ['./list-restuarant.component.css']
})
export class ListRestuarantComponent implements OnInit {
  alert:boolean=false;
public collection:any;
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void {
    this.commonservice.getRestoList().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection)
    });
  }
  deleteResto(resto){
    this.collection.splice(resto.id,1)
    this.commonservice.deleteResto(resto).subscribe((result)=>{
      console.log("Data deleted Successfully!",result)
      this.alert=true;
    })
    

  }
  closeAlert(){
    this.alert=false;
  }
 




  

}
