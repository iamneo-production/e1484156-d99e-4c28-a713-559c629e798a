import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LoginService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : LoginService) { }

  loginform: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email : new FormControl(null,[Validators.required, Validators.pattern(this.emailPattern)]),
      password : new FormControl(null, Validators.required)

    });
  }
  
  onSubmit(){
    this.userService.loginUser(this.loginform.value);
    this.loginform.reset();
  }

}
