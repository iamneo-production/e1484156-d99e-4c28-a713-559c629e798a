import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-edittheme',
  templateUrl: './edittheme.component.html',
  styleUrls: ['./edittheme.component.css']
})
export class EditthemeComponent implements OnInit {

  @ViewChild('form') themeBookingDetails: NgForm;
  themeBooking:any;
  themeId : number;
  id : string;
  themeAddress: string = '';
  otherTheme: string = '';
  imageUrl: string;

  constructor( private routeParams:ActivatedRoute, private themeService: ThemeService) { 
    this.id = this.routeParams.snapshot.params['id'];
    this.themeId = Number(this.id.substring(1,this.id.length-1));
  }

  ngOnInit(): void {
    this.themeService.GetThemeById(this.themeService.singleThemeId, (response) => {
      this.themeBooking = response;
      if (this.themeBooking.themeAddress !== 'park' && this.themeBooking.themeAddress !== 'restaurant' && this.themeBooking.themeAddress !== 'beach' && this.themeBooking.themeAddress !== 'boat') {
        this.themeAddress = 'others';
        this.otherTheme = this.themeBooking.themeAddress;
      } else {
        this.themeAddress = this.themeBooking.themeAddress;
        this.otherTheme = '';
      }
    });
  }
  
  
  onThemeAddressChange(): void {
    if (this.themeAddress !== 'others') {
      this.otherTheme = '';
    }
  }

  getAddress(): string {
    return this.themeAddress === 'others' ? this.otherTheme : this.themeAddress;
  }

EditTheme(){
  if (confirm('Confirmed the details and are sure you want to update the theme?')) {
    if (this.themeBookingDetails.valid) {
        const formData = {
          themeAddress: this.getAddress(),
          themeCost: this.themeBookingDetails.value.themeCost,
          themeDescription: this.themeBookingDetails.value.themeDescription,
          themeImageURL: this.themeBookingDetails.value.themeImageUrl,
          themeName: this.themeBookingDetails.value.themeName,
          themePhotographer: this.themeBookingDetails.value.themePhotographer,
          themeReturnGift: this.themeBookingDetails.value.themeReturnGift,
          themeVideographer: this.themeBookingDetails.value.themeVideographer
        };
      this.themeService.EditTheme(this.themeBooking,formData);
      this.themeBookingDetails.resetForm();
    }
  }
}

  openImage() {
    window.open(this.themeBookingDetails.value.themeImageUrl);
  }
}
