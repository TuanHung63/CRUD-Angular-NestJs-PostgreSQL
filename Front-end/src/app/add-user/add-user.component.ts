import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { FormControl } from '@angular/forms';
import { UsersService } from '../shared/users.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:Users={
    fullname:'',
    numberPhone:'',
    birthDay:'',
    email:'',
  }
  edit:boolean=false;

  constructor(private usersService:UsersService,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.usersService.getUserById(params['id'])
        .subscribe(
          res => {
            this.user = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

  }
  saveUser(){
    console.log(this.user);

    this.usersService.saveUser(this.user).subscribe(
      (res)=>{
        this.router.navigate(['/home']);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  updateUser(user:Users){
    this.usersService.updateUser(user).subscribe(
      (res)=>{
        this.router.navigate(['/home']);
      },
      err => console.error(err)
    )

  }

}
