import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/admin/AddMenu/menu.service';
import { AddonService } from 'src/app/admin/AddOn/addon.service';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { LoginService } from 'src/app/auth/auth.service';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewmoredetails',
  templateUrl: './viewmoredetails.component.html',
  styleUrls: ['./viewmoredetails.component.css']
})
export class ViewmoredetailsComponent implements OnInit{
  @ViewChild('form') EventDetails: NgForm;

  BookedThemeDetails: any;
  BookedEventDetails: any;
  BookedMenuDetails: any[] = [];
  MenuDetails: any[] = [];
  AddOnDetails: any[] = [];
  BookedAddOnDetails: any = [];
  singleuserfooditems: any = [];
  event = [];
  fooditems = [];
  addons = [];
  theme = [];
  menuIds: any = [];
  addonIds: any;
  themeId: number;
  flag = false;
  displayStyle = 'none';
  displayStyleaddon = 'none';
  qty: number;
  subtotal: number;
  ThemeCost: number;
  total: number;
  displayStylecheckout = 'none';
  constructor(
    private router: Router,
    private appservice: AppService,
    private themeservice: ThemeService,
    private menuservice: MenuService,
    private addonservice: AddonService,
    private loginservice: LoginService,
    private cartservice: CartserviceService
  ) {}

  ngOnInit(): void {
    this.getDate();
      this.appservice.GetBookedEventById(this.appservice.eventId,(response) => {
        this.BookedEventDetails = response;
        this.cartservice.setCartData('event', this.BookedEventDetails);
        this.event = this.cartservice.getCartData('event');

        this.themeservice.GetTheme((themes) => {
          themes.find((ele) => {
            if (ele.themeId == this.BookedEventDetails.themeId) {
              this.BookedThemeDetails = ele;
            }
          });
        });
        // this.themeservice.GetTheme().find(ele=>{if(ele.themeId == this.BookedEventDetails.themeId){this.BookedThemeDetails=ele}})
        if (this.BookedMenuDetails.length == 0 && this.flag == false) {
          this.menuIds = this.BookedEventDetails.eventmenuIds.split(',');
          this.menuIds.forEach((element) => {
            console.log("menuIds = " , this.menuIds);
            this.menuservice.GetMenu((response) => {
              console.log("response = " , response);
              response.find((ele) => {
                if (ele.foodMenuId == parseInt(element)) {console.log("Matched");
                  this.BookedMenuDetails.push(ele);
                  this.cartservice.setCartData('foodmenu', this.BookedMenuDetails);
                  this.fooditems = this.cartservice.getCartData('foodmenu');
  
                }
              });
            })
          });
  
        }
  
        if (this.BookedAddOnDetails.length == 0 && this.flag == false) {
          this.addonIds = this.BookedEventDetails.addOnIds.split(',');
          console.log(this.BookedEventDetails.addOnIds);
          this.addonIds.forEach((element) => {
            console.log(element);
            this.addonservice.GetAddOn((response) => {
              response.find((ele) => {
                if (ele.addOnId == parseInt(element)) {
                  this.BookedAddOnDetails.push(ele);
                  this.cartservice.setCartData('addon', this.BookedAddOnDetails);
                  this.addons = this.cartservice.getCartData('addon');
                }
              });
            })
          });
        }
      })

      this.menuservice.GetMenu((response) => {
        this.MenuDetails = response;
      });

      this.addonservice.GetAddOn((response) => {
        this.AddOnDetails = response;
      });
  }

  BackPage() {
    this.cartservice.setCartData('event', []);
    this.cartservice.setCartData('foodmenu', []);
    this.cartservice.setCartData('theme', []);
    this.cartservice.setCartData('addon', []);
    this.router.navigateByUrl('user/getBookedTheme');
  }

  onDeletefoodmenu(i: number) {
    this.fooditems.splice(i, 1);
    this.cartservice.setCartData('foodmenu', this.fooditems);
  }
  onDeleteaddon(i: number) {
    this.addons.splice(i, 1);
    this.cartservice.setCartData('addon', this.addons);
  }

  popup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  addonpopup() {
    this.displayStyleaddon = 'block';
  }

  addonclosePopup() {
    this.displayStyleaddon = 'none';
  }

  addfoodtocart(item) {
    this.fooditems=this.cartservice.getCartData('foodmenu')
    var alreadyExists = false;
    this.fooditems.forEach((foodItem) => {
      if(item.foodMenuId == foodItem.foodMenuId)
      {
        alert("Menu already exists");
        alreadyExists = true;
        return;
      }
    })
    if(!alreadyExists)
    {
      this.fooditems.push(item)
      alert("Menu added")
      this.cartservice.setCartData('foodmenu',this.fooditems)
    }
  }

  addaddontocart(addon) {
    this.addons=this.cartservice.getCartData('addon')
    var alreadyExists = false;
    this.addons.forEach((addItemEle) => {
      if(addon.addOnId == addItemEle.addOnId)
      {
        alert("Addon already exists");
        alreadyExists = true;
        return;
      }
    })
    if(!alreadyExists)
    {
      this.addons.push(addon)
      this.cartservice.setCartData('addon',this.addons)
      alert("Addon added")
    }
  }

  getsubTotal() {
    let subs = 0;
    let totalsubs = 0;
    for (const item of this.fooditems) {
      subs += item.foodMenuCost;
    }
    this.subtotal = subs * this.EventDetails.value.noOfPeople;

    for (const item of this.addons) {
      totalsubs += parseInt(item.addOnPrice);
    }
    this.subtotal += totalsubs;
  }
  getTotal() {
    this.ThemeCost = this.BookedThemeDetails.themeCost;
    this.total = this.subtotal + this.ThemeCost;
  }

  OnCheckOut() {
    if (confirm('Are you sure you want to update the details')) {
      var eventid = this.BookedEventDetails.eventId;
      var userid = JSON.parse(this.loginservice.getToken()).userId;
      var food = '';
      var addon = '';
      this.addons.forEach((ele) => {
        addon += ele.addOnId.toString() + ',';
      });
      this.fooditems.forEach((ele) => {
        food += ele.foodMenuId.toString() + ',';
      });
      this.appservice.EditEvent(
        this.BookedThemeDetails,
        eventid,
        this.EventDetails.value,
        food,
        addon,
        userid,
        this.total
      );
      this.cartservice.setCartData('event', []);
      this.cartservice.setCartData('theme', []);
      this.cartservice.setCartData('foodmenu', []);
      this.cartservice.setCartData('addon', []);
      this.router.navigateByUrl('user/getBookedTheme');
      setTimeout(() => {
        location.reload();
      }, 100);
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

  savepopup() {
    this.displayStylecheckout = 'block';
    this.getsubTotal();
    this.getTotal();
  }

  saveclosePopup() {
    this.displayStylecheckout = 'none';
  }
}
