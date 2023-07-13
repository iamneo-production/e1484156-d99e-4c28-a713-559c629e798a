import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-editaddon',
  templateUrl: './editaddon.component.html',
  styleUrls: ['./editaddon.component.css']
})
export class EditaddonComponent {

  @ViewChild('form') AddOnDetails:NgForm;
  addOn:any;

  constructor(private addOnService:AddonService) {
   }

  ngOnInit(): void {
    this.addOnService.GetAddOnById(this.addOnService.singleAddOnId, (response) => {
      this.addOn = response;
    });
  }

  openImage() {
    window.open(this.AddOnDetails.value.addOnImageURL);
  }

  EditMenu(){
    if (confirm('Confirmed the details and are sure you want to update addOn?')) {
      this.addOnService.EditAddOn(this.addOn,this.AddOnDetails.value);
    }
  }
}
