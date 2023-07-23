import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit{

  @ViewChild('form') MenuDetails:NgForm;
  menu:any;

  constructor(private menuService:MenuService) {
   }

  ngOnInit(): void {
    this.menuService.GetMenuById(this.menuService.singleMenuId, (response) => {
      this.menu = response;
    });   
  }

  openImage() {
    window.open(this.MenuDetails.value.foodMenuImageURL);
  }

  EditMenu(){
    if (confirm('Confirmed the details and are sure you want to update the menu?')) {
      this.menuService.EditMenu(this.menu,this.MenuDetails.value);
    }
  }
}
