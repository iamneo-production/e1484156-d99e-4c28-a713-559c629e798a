import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/Services/cartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName: string;
  showDropdown: boolean = false;

  constructor(private auth: LoginService,private router:Router,private cartservice:CartserviceService) { }

  ngOnInit(): void {
    var userString = sessionStorage.getItem('user');
    var userObject = JSON.parse(userString);
    this.userName = userObject.userName;
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  profile(): void {
  } 

  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.dropdown')) {
      this.showDropdown = false;
    }
  }  

  logout(): void {
    this.auth.logout();
    this.cartservice.setCartData('event',[])
    this.cartservice.setCartData('theme',[])
    this.cartservice.setCartData('foodmenu',[])
    this.cartservice.setCartData('addon',[])
  }

  gotocart(){
    this.router.navigateByUrl("user/cart");
  }
  
}
