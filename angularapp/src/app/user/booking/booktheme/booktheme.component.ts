import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/Services/cartservice.service';

@Component({
  selector: 'app-booktheme',
  templateUrl: './booktheme.component.html',
  styleUrls: ['./booktheme.component.css']
})
export class BookthemeComponent {

  themeBooking:any;
  id:string
  themeId : number;
  constructor(private themeService:ThemeService,private router:Router,private cartservice:CartserviceService) {
    
  }

  ngOnInit(): void {
    this.themeService.GetThemeById(this.themeService.singleThemeId, (response) => {
      this.themeBooking = response;
    });
  }

  continuebooking(id:number){
   this.router.navigateByUrl("user/bookTheme");
   console.log(this.themeBooking);
   this.cartservice.addTheme(this.themeBooking);
   this.themeService.singleThemeId = id;

  }

  BackPage(){
    this.router.navigateByUrl("user/getAllThemes")
  }
}
