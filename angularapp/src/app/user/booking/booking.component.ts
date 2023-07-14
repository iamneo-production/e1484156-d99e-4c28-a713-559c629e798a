import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';
import { CartserviceService } from 'src/app/Services/cartservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  @ViewChild('form') bookFirstFormDetails: NgForm;
  @ViewChild('subform') bookSecondFormDetails: NgForm;
  @ViewChild('CheckBox') CheckBoxDetails: ElementRef;

  nextPage: boolean = false;
  currentPage: boolean = true;
  BookingFirstForm: any;
  BookingSecondForm: any;
  CombinedBookingForm: any = {};
  BookedEventDetails: any = [];
  themeBooking:any;
  id:string
  themeId : number;
  eventdetails:[]

  constructor(private router:Router,private themeService:ThemeService,private cartservice:CartserviceService) {
    
  }
  
  ngOnInit(): void {
    this.getDate();
    this.themeService.GetThemeById(this.themeService.singleThemeId, (response) => {
      this.themeBooking = response;
    });
  }

  uploadDetails() {
    this.BookingSecondForm = this.bookSecondFormDetails.value;
    this.nextPage = false;
    this.currentPage = true;
  }
  onSubmit() {
    this.BookingFirstForm = this.bookFirstFormDetails.value;
    if (this.bookFirstFormDetails.valid) {
      this.nextPage = true;
      this.currentPage = false;
    }
  }

  nextpage(){
    if (confirm("Are you sure you want to proceed next")){
      this.BookingFirstForm = this.bookFirstFormDetails.value;
      this.router.navigateByUrl("user/foodmenu");
      this.cartservice.addevent(this.BookingFirstForm);
    }
  }

  minDate:any="";
  getDate(){
    const date: Date = new Date();
    date.setDate(date.getDate() + 1);

    const toDate: string = date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString();
    const month: string = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString();
    const year: number = date.getFullYear();

    this.minDate = `${year}-${month}-${toDate}`;
  }
}
