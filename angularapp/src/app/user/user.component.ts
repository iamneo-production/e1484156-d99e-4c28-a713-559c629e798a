import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  url:string;
  nav:boolean = true;
  constructor(private router:Router){
    this.url = router.url;
  }
  ngOnInit(): void {
    if(!((this.url=='login') || (this.url=='signup'))){
      this.nav = true;
    }
  }

}
