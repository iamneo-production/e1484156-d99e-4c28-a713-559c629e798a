import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent {
  @ViewChild('form') themeBookingDetails: NgForm;
  themeAddress: string = '';
  otherTheme: string = '';
  imageUrl: string;
  
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  getAddress(): string {
    return this.themeAddress === 'others' ? this.otherTheme : this.themeAddress;
  }

  openImage() {
    window.open(this.imageUrl);
  }

  onSubmit() {
    if (confirm('Confirmed the details and are sure you want to add the theme?')) {
      if (this.themeBookingDetails.valid) {
        const formData = {
          themeAddress: this.getAddress(),
          themeCost: this.themeBookingDetails.value.themeCost,
          themeDescription: this.themeBookingDetails.value.themeDescription,
          themeImageURL: this.imageUrl,
          themeName: this.themeBookingDetails.value.themeName,
          themePhotographer: this.themeBookingDetails.value.themePhotographer,
          themeReturnGift: this.themeBookingDetails.value.themeReturnGift,
          themeVideographer: this.themeBookingDetails.value.themeVideographer
        };
      this.themeService.AddTheme(formData);
      this.themeBookingDetails.resetForm();
      }
    }
  }
}
