import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

type CallBackFunction = (data: any) => void;

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  UserDetails: any =[];
  singleUserDetail:any;
  singleUserId:number;

  constructor(private http:HttpClient,private router: Router) { }

  AddUser(UserDetail: any) {
    (this.http.post('http://localhost:8081/admin/addUser', UserDetail).subscribe(Response => {
      alert("User added successfully");
      this.router.navigateByUrl('admin/getUsers');
    },
    (error:any)=>{
      alert(error.error);
      this.router.navigateByUrl('admin/getUsers');
    }));
  }

  GetUser(cb: CallBackFunction) {
    (this.http.get('http://localhost:8081/admin/getUser').subscribe((response) => { 
      cb(response);
    }));
  }
  
  GetUserById(userId: number, cb: CallBackFunction) {
    this.http.get('http://localhost:8081/admin/getUser/' + userId).subscribe(
      (response) => { 
        cb(response);
      }
    );
  }

  EditUser(ActualUserDetails: any, EditedUserDetails: any) {
    (this.http.put('http://localhost:8081/admin/editUser/' + ActualUserDetails.userId,
        {
          "userId":ActualUserDetails.userId,
          "userName":EditedUserDetails.userName,
          "email":EditedUserDetails.email,
          "password":EditedUserDetails.password,
          "mobileNumber":EditedUserDetails.mobileNumber,
          "userRole":EditedUserDetails.userRole
        }
      ).subscribe(response => {
        alert("User updated successfully");
        this.router.navigateByUrl('admin/getUsers');
      }));
    this.UserDetails.splice(this.UserDetails.indexOf(ActualUserDetails),1,EditedUserDetails)
  }

  DeleteUser(UserDetails: any) {
    this.http.delete('http://localhost:8081/admin/deleteUser/'+UserDetails.userId).subscribe(response => {
      alert("User deleted successfully");
      this.router.navigateByUrl('admin/getUsers');
    })
  }
  
}
