import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http:HttpClient) { }
  URL='http://localhost:3000/';

  getUsers(){
    return this._http.get<any>(`${this.URL}users`);
  }
  getUserById(id:String){
    return this._http.get(`${this.URL}users/findOne/${id}`);
  }
  saveUser(user:Users){
    return this._http.post(`${this.URL}users`,user);

  }
  updateUser(user:Users){
    return this._http.put(`${this.URL}users/update`,user);
  }
  deleteUserById(id:number){
    return this._http.delete(`${this.URL}users/delete/${id}`);
  }

}
