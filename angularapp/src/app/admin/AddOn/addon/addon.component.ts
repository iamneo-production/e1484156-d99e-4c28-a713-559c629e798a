import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit{

  imageUrl: string;
  @ViewChild('form') AddOnDetails:NgForm;
  constructor(private addOnService:AddonService) { }

  ngOnInit(): void {
  }

  openImage() {
    window.open(this.imageUrl);
  }

  onSubmit(){
    if (confirm('Confirmed the details and are sure you want to add the addOn?')) {
      this.addOnService.AddAddOn(this.AddOnDetails.value);
      this.AddOnDetails.resetForm();
    }
  }
}
