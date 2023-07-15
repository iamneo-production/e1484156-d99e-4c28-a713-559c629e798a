import { Component, OnInit } from '@angular/core';
import { AddonService } from 'src/app/admin/AddOn/addon.service';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookaddon',
  templateUrl: './bookaddon.component.html',
  styleUrls: ['./bookaddon.component.css']
})
export class BookaddonComponent implements OnInit{

  AddOns:any;
  addons=[]
  constructor(private addOnService:AddonService,private cartservice:CartserviceService,private router:Router) { }

  ngOnInit(): void {
    this.addOnService.GetAddOn((response) => {
      this.AddOns = response;
    });
  }

  selectaddon(addon){
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
  gotocart(){
   this.router.navigateByUrl("user/cart");
   setTimeout(() => {
    location.reload();
  }, 1000);
  }

}
