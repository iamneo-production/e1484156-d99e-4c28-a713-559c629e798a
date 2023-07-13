import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/admin/AddMenu/menu.service';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/Services/cartservice.service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent {
  BookedEventDetails: any = [];
  menu :any 
  searchBox:string;
  qty:number
  fooditems=[]
  constructor(private menuservice:MenuService,private router:Router,private cartservice:CartserviceService) { }
  ngOnInit(): void {
    this.menuservice.GetMenu((response) => {
      this.BookedEventDetails = response;
    });
  }

  NextPage(){
    this.router.navigateByUrl("user/addon");
  }

  closeClick(){
    this.menuservice.GetMenu((response) => {});
  }

  addtocart(item){
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
}
