import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';
import { LoginService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : LoginService) { }

  userform : FormGroup;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonenumber_pattern = "^[6-9][0-9]{9}$";


  ngOnInit(): void {
    this.userform = new FormGroup({
      userrole : new FormControl('',Validators.required),
      email : new FormControl (null, [Validators.required, Validators.pattern(this.emailPattern)]),
      username : new FormControl (null, Validators.required),
      mobilenumber : new FormControl (null, [Validators.required, Validators.pattern(this.phonenumber_pattern)]),
      password : new FormControl (null, Validators.required),
      confirmpassword : new FormControl (null, Validators.required)
    });
  }

  onCheckPassword(){
    if(this.userform.controls['password'].value== this.userform.controls['confirmpassword'].value)
    {
      this.userform.controls['confirmpassword'].setErrors(null);
    }
    else
    {
      this.userform.get('confirmpassword')?.setErrors({ mismatch: true})
    }
  }

  onSubmit(){
    this.userService.registerUser(this.userform.value);
    this.userform.reset();
  }

}
