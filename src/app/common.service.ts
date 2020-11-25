import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
URl="http://localhost:3000/resto"
regURl="http://localhost:3000/users"
  constructor(private _http:HttpClient) { }
  getRestoList(){
   return this._http.get(this.URl);
  }
  addResto(data){
    return this._http.post(this.URl,data);
   }
   getCurrentData(id){
    return this._http.get(`${this.URl}/${id}`);
   }
   updateResto(id,data){
    return this._http.put(`${this.URl}/${id}`,data);

   }
   deleteResto(id){
    return this._http.delete(`${this.URl}/${id}`);

   }
   userRestuarant(data){
     return this._http.post(this.regURl,data);
   }
   loginUser(Email: string, Password: string){
    return this._http.post(this.regURl,{
      Email: Email,
      Password: Password
    });
  }

}
