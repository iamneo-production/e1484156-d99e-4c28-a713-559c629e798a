import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/user/app.service';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { LoginService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent {
  constructor(private appService: AppService,private cartservice:CartserviceService, private loginservice:LoginService,private router:Router) {
  }

  bookedEventDetails: any[] = [];

  ngOnInit(): void {
    this.viewBookingInit();
  }
  displayStyle = "none";
  @ViewChild('form') EditEventDetails: any;
  PopupDetails: any;
  openPopup(item: any) {
    this.PopupDetails = item;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  editEvent(item: any) {
    this.appService.eventId = item.eventId;
    this.router.navigateByUrl('user/viewmore');
  }

  DeleteEvent(item: any) {
    this.appService.DeleteBookedEvent(item);
    setTimeout(() => {
      location.reload();
      }, 100); 
    this.router.navigateByUrl("user/getBookedTheme");  
  }

  viewBookingInit() {
    const userId = JSON.parse(this.loginservice.getToken()).userId;
    console.log(userId);
    this.appService.GetBookedEvent().subscribe((result: any) => {
      console.log(result);
      this.bookedEventDetails = result.filter((event: any) => event.userId === userId);
      console.log(this.bookedEventDetails);
    });
  }

  backPage() {
    this.cartservice.setCartData('event', []);
    this.router.navigateByUrl('user/getAllThemes');
  }
}
