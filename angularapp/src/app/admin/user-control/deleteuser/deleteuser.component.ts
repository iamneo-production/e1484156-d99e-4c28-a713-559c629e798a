import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent {

  User: any;
  id: number;
  valid: boolean;

  constructor(private userService: UserControlService,private router:Router) {
    this.valid = true;
   }

  ngOnInit(): void {
    this.userService.GetUserById(this.userService.singleUserId, (response) => {
      this.User = response;
    });
  }

  
  DeleteUser() {
    if(confirm('Are you sure want to delete the user?')){
      this.userService.DeleteUser(this.User);
      this.valid = false;
      this.User = null;
      this.User.resetForm();
    }
  }
}
