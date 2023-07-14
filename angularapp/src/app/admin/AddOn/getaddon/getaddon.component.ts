import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-getaddon',
  templateUrl: './getaddon.component.html',
  styleUrls: ['./getaddon.component.css']
})
export class GetaddonComponent implements OnInit{

  AddOns:any;
  id : number;
  constructor(private route:Router,private addOnService:AddonService) { }

  ngOnInit(): void {
    this.addOnService.GetAddOn((response) => {
      this.AddOns = response;
    });
  }

  AddNav(){
    this.route.navigate(['admin/addAddon'])
  }
  EditNav(id:number){
    this.route.navigate(['admin/editAddOn/{'+id+'}']);
    this.addOnService.singleAddOnId = id;
  }
  DeleteNav(id:number){
    this.route.navigate(['admin/deleteAddOn/{'+id+'}']);
    this.addOnService.singleAddOnId = id;
  }
  
}
