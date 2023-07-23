import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LoginDetails: any =[];
  RegisterDetails: any=[]


  constructor(private http: HttpClient,private router:Router) { }

  getToken(): string | null {
    return sessionStorage.getItem('user');
  }

  registerUser(RegisterDetails: any) {
    this.http.post('https://8080-cadcffeefefcdaedafbaaabdbdcfdaefedccc.project.examly.io/admin/signup', RegisterDetails, { responseType: "text" }).subscribe(
      (response: any) => {
        alert(response);
        this.router.navigate(['/auth/login']);
      },
      (error: any) => {
        alert(error.error);
      }
    );
  }

  loginUser(LoginDetails:any){
    this.http.post('https://8080-cadcffeefefcdaedafbaaabdbdcfdaefedccc.project.examly.io/admin/login', LoginDetails).subscribe((response:any )=> {
      const user = response;
      sessionStorage.setItem('user', JSON.stringify(user));

      if (response && response.userRole === 'admin') {
        alert("Admin login successful");
        this.router.navigateByUrl('/admin');
      } else {
        alert("User login successful");
        this.router.navigateByUrl('/user');
      }
    },
    (error:any)=>{
      alert(error.error);
    });
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout()
  {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/auth/login');
  }
}
