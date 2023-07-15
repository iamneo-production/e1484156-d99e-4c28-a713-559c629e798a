import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit{

  userName: string;
  showDropdown: boolean = false;
  showProfile: boolean = false;

  constructor(private auth : LoginService) { }

  ngOnInit(): void {
    var userString = sessionStorage.getItem('user');
    var userObject = JSON.parse(userString);
    this.userName = userObject.userName;
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  profile(): void {
    this.showProfile = !this.showProfile;
  }  

  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.dropdown')) {
      this.showDropdown = false;
    }
  } 

  logout(): void {
    this.auth.logout();
  }
  
}
