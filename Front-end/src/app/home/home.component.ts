import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { Users } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _usersService:UsersService, private router:Router) { }
  users:Users[]=[];

  ngOnInit(): void {
    this._usersService.getUsers().subscribe(
      (data)=>{
        this.users=data;
      }
    )
  }
  editUser(){

  }
  deleteUser(users:Users){
    this._usersService.deleteUserById(users.id!).subscribe(
      (res)=>{
        window.location.reload();
      },
      (err)=>{
        console.log(err);

      }
    )

  }

}
