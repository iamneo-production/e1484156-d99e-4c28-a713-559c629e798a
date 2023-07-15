import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddOnModel } from '../shared/addonmodel';
import { FoodMenuModel } from '../shared/foodmenumodel';
import { Theme } from '../shared/theme';
import { EventModel } from '../shared/eventmodel';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  placeholder=[];
  addonplaceholder=[];
  themeholder=[];
  eventdetailsholder=[];
  theme=new BehaviorSubject([]);
  foodItems=new BehaviorSubject([]);
  addonItems=new BehaviorSubject([]);
  eventdetails=new BehaviorSubject([]);
  latesteventId:number 

  constructor() { 
    const ls= this.getCartData('foodmenu');
    const lsa=this.getCartData('addon');
    const lst=this.getCartData('theme');
    const lse=this.getCartData('event');
    if(ls) this.foodItems.next(ls);
    if(lsa)this.addonItems.next(lsa);
    if(lst)this.theme.next(lst);
    if(lse)this.eventdetails.next(lse);
  }

  addItem(ci:FoodMenuModel){
    alert("item added");
    const ls= this.getCartData('foodmenu');
    console.log(ls)
    let exist : FoodMenuModel;

   if(ls)
     exist=ls.find((item)=>{
      return item.foodMenuId===ci.foodMenuId;
    });

    if(exist){
      exist.qty++;
      this.setCartData('foodmenu',ls);
    } 
    else{
      if(ls){
        const newData=[...ls,ci];
        console.log(newData);
        this.setCartData('foodmenu',newData);
      }
        this.placeholder.push(ci);
        this.setCartData('foodmenu',this.placeholder);
    }
      
  }

  addAddOn(addon:AddOnModel){
    alert("addon added");
    const lsa= this.getCartData('addon')

    if(lsa){
        const newData=[...lsa,addon];
        this.setCartData('addon',newData);
    }
      this.addonplaceholder.push(addon);
      this.setCartData('addon',this.addonplaceholder);
    
  }

  addTheme(theme:Theme){
    alert("theme selected");
    console.log(theme);
    const lst= this.getCartData('theme')

    if(lst){
        const newData=[...lst,theme];
        this.setCartData('theme',newData);
    }
      this.themeholder.push(theme);
      this.setCartData('theme',this.themeholder);
   
  }


  addevent(event:EventModel){
    console.log(event);
    const lse= this.getCartData('event')

    if(lse){
        const newData=[...lse,event];
        this.setCartData('event',newData);
    }
      this.eventdetailsholder.push(event);
      this.setCartData('event',this.eventdetailsholder);
   
  }

  setCartData(name:string,data:any){
    console.log("SEtting cart data name =", name , " data = " , data);
    localStorage.setItem(name,JSON.stringify(data));
  }

  getCartData(name:string){
   return JSON.parse(localStorage.getItem(name));
   
  }
}
