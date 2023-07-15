import { Component, OnInit } from '@angular/core';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-deleteaddon',
  templateUrl: './deleteaddon.component.html',
  styleUrls: ['./deleteaddon.component.css']
})
export class DeleteaddonComponent implements OnInit{

  AddOn: any;
  id: string;
  valid: boolean;
  constructor(private AddOnService: AddonService) {
    this.valid = true;
  }

  ngOnInit(): void {
    this.AddOnService.GetAddOnById(this.AddOnService.singleAddOnId, (response) => {
      this.AddOn = response;
    });
  }

  DeleteAddOn() {
    if(confirm('Are you sure you want to delete the addOn?')){
      this.AddOnService.DeleteAddOn(this.AddOn);
      this.valid = false;
      this.AddOn = null;
    }
  }

}
