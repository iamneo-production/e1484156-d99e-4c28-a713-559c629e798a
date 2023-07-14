import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-get-theme',
  templateUrl: './get-theme.component.html',
  styleUrls: ['./get-theme.component.css']
})
export class GetThemeComponent implements OnInit {

  constructor(private themeService:ThemeService, private route:Router) {
  }

  id:number;
  Themes:any;
  ngOnInit(){
    this.themeService.GetTheme((themes)=>{
      this.Themes = themes;
    });
  }
  
  AddNav(){
    this.route.navigate(['admin/addTheme'])
  }

  EditNav(id:number){
    this.route.navigate(['admin/editTheme/{'+id+'}']);
    this.themeService.singleThemeId = id;
  }
  DeleteNav(id:number){
    this.route.navigate(['admin/deleteTheme/{'+id+'}']);
    this.themeService.singleThemeId = id;
  }
}
