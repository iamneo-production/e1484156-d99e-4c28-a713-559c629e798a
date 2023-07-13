import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-deletetheme',
  templateUrl: './deletetheme.component.html',
  styleUrls: ['./deletetheme.component.css']
})
export class DeletethemeComponent {

  themeBooking: any;
  id: string;
  valid: boolean;
  constructor(private themeService: ThemeService) {
    this.valid = true;
  }

  ngOnInit(): void {
    this.themeService.GetThemeById(this.themeService.singleThemeId, (response) => {
      this.themeBooking = response;
    });
  }

  openImage(url: string): void {
    window.open(url);
  }

  DeleteTheme() {
    if(confirm('Are you sure you want to delete the theme?')){
      this.themeService.DeleteTheme(this.themeBooking);
      this.valid = false;
      this.themeBooking = null;
    }
  }

}
