import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

type CallBackFunction = (data: any) => void;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  ThemeDetails: any=[];
  singleThemeDetail:any;
  singleThemeId:number;


  constructor(private http: HttpClient,private router: Router) { }

  AddTheme(ThemeDetail: any) {
    (this.http.post('http://localhost:8081/admin/addTheme', ThemeDetail).subscribe(Response => {
      alert("Theme added successfully");
      this.router.navigateByUrl('admin/getTheme');
    },
    (error:any)=>{
      alert(error.error);
      this.router.navigateByUrl('admin/getTheme');
    }));
  }

  GetTheme(cb: CallBackFunction) {
    (this.http.get('http://localhost:8081/admin/getTheme').subscribe((response) => {
      cb(response);
    }));
  }

  GetThemeById(themeId: number, cb: CallBackFunction) {
    this.http.get('http://localhost:8081/admin/getTheme/' + themeId).subscribe(
      (response) => {
        cb(response);
      }
    );
  }

  EditTheme(ActualThemeDetails: any, EditedThemeDetails: any) {
    (this.http.put('http://localhost:8081/admin/editTheme/' + ActualThemeDetails.themeId,
      {
        "themeId": ActualThemeDetails.themeId,
        "themeName": EditedThemeDetails.themeName,
        "themeImageURL": EditedThemeDetails.themeImageURL,
        "themeDescription": EditedThemeDetails.themeDescription,
        "themePhotographer": EditedThemeDetails.themePhotographer,
        "themeVideographer": EditedThemeDetails.themeVideographer,
        "themeReturnGift": EditedThemeDetails.themeReturnGift,
        "themeCost": EditedThemeDetails.themeCost,
        "themeAddress":EditedThemeDetails.themeAddress
      }
    ).subscribe(response => {
      alert("Theme updated successfully");
      this.router.navigateByUrl('admin/getTheme');
    },
    (error:any)=>{
      alert(error.error);
      this.router.navigateByUrl('admin/getTheme');
    }));
  }

  DeleteTheme(ThemeDetails: any) {
    this.http.delete('http://localhost:8081/admin/deleteTheme/'+ThemeDetails.themeId).subscribe(response => {
      alert("Theme deleted successfully");
      this.router.navigateByUrl('admin/getTheme');
    })
  }
  
}
