import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserControlService } from '../user-control.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit{

  @ViewChild('form') UserDetails:NgForm;
  user:any;

  constructor(private userService:UserControlService,private router:Router) { }

  userform : FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonenumber_pattern = "^[6-9][0-9]{9}$";

  ngOnInit(): void {
    this.userform = new FormGroup({
      email : new FormControl (null, [Validators.required, Validators.pattern(this.emailPattern)]),
      userName : new FormControl (null, Validators.required),
      mobileNumber : new FormControl (null, [Validators.required, Validators.pattern(this.phonenumber_pattern)]),
      password : new FormControl (null, Validators.required),
      userRole : new FormControl(null)
    });
    this.userService.GetUserById(this.userService.singleUserId, (response) => {
      this.user = response;
    });
  }

  EditUser(){
    if (confirm('Confirmed the details and are sure you want to update the User?')) {
      this.userService.EditUser(this.user,this.UserDetails.value);
      this.UserDetails.resetForm();
      this.user.resetForm();
    }
  }
}
