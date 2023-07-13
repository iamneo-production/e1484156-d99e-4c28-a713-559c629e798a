import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControlService } from '../user-control.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent {

  UserDetails: any = [];

  constructor(private route:Router,private userService:UserControlService) { }

  ngOnInit():void{
    this.userService.GetUser((users) =>{
    this.UserDetails = users
    });
  }

  AddNav() {
    this.route.navigate(['admin/addUser'])
  }

  EditNav(id: number) {
    this.route.navigate(['admin/editUser/{' + id + '}']);
    this.userService.singleUserId = id;
  }
  DeleteNav(id: number) {
    this.route.navigate(['admin/deleteUser/{' + id + '}']);
    this.userService.singleUserId = id;
  }
  
}
