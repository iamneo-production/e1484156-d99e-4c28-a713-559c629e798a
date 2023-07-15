import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/admin/AddMenu/menu.service';
import { AddonService } from 'src/app/admin/AddOn/addon.service';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  @ViewChild('form') EventDetails:NgForm;

  fooditems=[]
  addonitems=[]
  total:number 
  subtotal:number
  ThemeCost:number
  themedetails=[]
  eventdetails=[]

  MenuDetails:any[]=[]
  AddOnDetails:any[]=[]
  ThemeDetails:any[]=[]
  userdetails:any
  singleMenuDetail:any;
  BookedEventDetails: any[]=[];
  latesteventid :number
  addOnIds:string=""
  foodMenuIds:string=""
  displayStyle="none";
  displayStyleaddon="none";

  displayStylecheckout="none";

  displayStyletheme="none";


  constructor(private themeservice:ThemeService,private menuservice:MenuService,private addonservice:AddonService,private cartservice:CartserviceService,private appservice:AppService,private router:Router) { }

  ngOnInit(): void {
    this.getDate();
    setInterval(()=>{
    this.cartservice.theme.subscribe(data=>{
      this.themedetails=data;
      if(this.fooditems || this.addonitems || this.themedetails)this.getsubTotal(this.fooditems,this.addonitems);
      if(this.fooditems || this.addonitems || this.themedetails)this.getTotal(this.fooditems,this.addonitems,this.themedetails);
    }) 


    this.cartservice.foodItems.subscribe(data=>{
      this.fooditems=data;
      if(this.fooditems || this.addonitems || this.themedetails)this.getsubTotal(this.fooditems,this.addonitems);
      if(this.fooditems || this.addonitems || this.themedetails)this.getTotal(this.fooditems,this.addonitems,this.themedetails);
    }) 
      this.cartservice.addonItems.subscribe(data=>{
      this.addonitems=data;

      if(this.fooditems || this.addonitems || this.themedetails)this.getsubTotal(this.fooditems,this.addonitems);
      if(this.fooditems || this.addonitems || this.themedetails)this.getTotal(this.fooditems,this.addonitems,this.themedetails);
    })


    this.cartservice.eventdetails.subscribe(data=>{
      this.eventdetails=data;
    })
    
    
    },100)

    this.menuservice.GetMenu((response) => {
      this.MenuDetails = response;
    });
    this.addonservice.GetAddOn((response) => {
      this.AddOnDetails = response;
    });
    this.themeservice.GetTheme((themes) => {
      this.ThemeDetails = themes;
    })

   
  }

  onDeletefoodmenu(i:number){
    this.fooditems.splice(i,1);
    this.cartservice.setCartData('foodmenu',this.fooditems);
  }
  onDeleteaddon(i:number){
    this.addonitems.splice(i,1);
    this.cartservice.setCartData('addon',this.addonitems);
  }



  getsubTotal(fooddata:any,addondata:any){
   let subs=0;
   let totalsubs=0;
   for(const item of fooddata){
     subs+=item.foodMenuCost;
   }
  this.subtotal=subs * (this.EventDetails.value.noOfPeople);

   for(const item of addondata){
     totalsubs+=parseInt(item.addOnPrice);
  }
    this.subtotal+=totalsubs;
  }
   getTotal(fooddata:any,addondata:any,themes:any){
    this.ThemeCost=themes[0]['themeCost'];
    this.total=this.subtotal+themes[0]['themeCost'];
  }
  
  onCheckout(){
   this.userdetails = sessionStorage.getItem('user');
   const userId = JSON.parse(this.userdetails).userId;    
   this.addonitems.forEach(ele=>{this.addOnIds+=(ele.addOnId).toString()+","})
   this.fooditems.forEach(ele=>{this.foodMenuIds+=(ele.foodMenuId).toString()+","})
   this.appservice.AddEvent(this.themedetails,this.EventDetails.value,this.foodMenuIds,this.addOnIds,userId,this.total)
   this.router.navigateByUrl("user/getBookedTheme")
   setTimeout(() => {
    location.reload();
    }, 100);   
   this.cartservice.setCartData('event',[]) 
   this.cartservice.setCartData('theme',[])
   this.cartservice.setCartData('foodmenu',[])
   this.cartservice.setCartData('addon',[])
  }

  BackPage(){
    this.router.navigateByUrl("user/addon");
  }

  foodpage(){
    this.router.navigateByUrl("user/foodmenu")
  }

  addonpage(){
    this.router.navigateByUrl("user/addon")
  }

  popup(){
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  
  addonpopup(){
  this.displayStyleaddon="block";
  }
  
  addonclosePopup(){
    this.displayStyleaddon="none";
  
  }

  addfoodtocart(item){
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

  addaddontocart(addon){
   this.addonitems=this.cartservice.getCartData('addon')
    var alreadyExists = false;
    this.addonitems.forEach((addItemEle) => {
      if(addon.addOnId == addItemEle.addOnId)
      {
        alert("Addon already exists");
        alreadyExists = true;
        return;
      }
    })
    if(!alreadyExists)
    {
      this.addonitems.push(addon)
      this.cartservice.setCartData('addon',this.addonitems)
      alert("Addon added")
    }
  }

  savepopup(){
    this.displayStylecheckout="block"
  }

  saveclosePopup(){

    this.displayStylecheckout="none"

  }

  edittheme(){
   this.displayStyletheme="block";
  }

  changetheme(item:any){
    this.themedetails.pop()
    this.themedetails.push(item)
    alert("theme changed")
    this.cartservice.setCartData('theme',this.themedetails)

  }
  themeclosePopup(){
   this.displayStyletheme="none";
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
