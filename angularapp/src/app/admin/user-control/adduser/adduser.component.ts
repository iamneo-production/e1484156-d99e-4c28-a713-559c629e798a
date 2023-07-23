import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserControlService } from '../user-control.service';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit{
  @ViewChild('form') UserDetails:NgForm;
  constructor(private userService:UserControlService,private router:Router) { }

  userform : FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonenumber_pattern = "^[6-9][0-9]{9}$";

  ngOnInit(): void {
    this.userform = new FormGroup({
      email : new FormControl (null, [Validators.required, Validators.pattern(this.emailPattern)]),
      username : new FormControl (null, Validators.required),
      mobilenumber : new FormControl (null, [Validators.required, Validators.pattern(this.phonenumber_pattern)]),
      password : new FormControl (null, Validators.required),
      userRole: new FormControl (null,Validators.required)
    });
  }
  onSubmit(){
    if (confirm('Confirmed the details and are sure you want to add the User?')) {
      this.userService.AddUser(this.UserDetails.value);
      this.UserDetails.resetForm();
    }
  }
}
