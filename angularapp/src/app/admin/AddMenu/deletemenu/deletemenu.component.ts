import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-deletemenu',
  templateUrl: './deletemenu.component.html',
  styleUrls: ['./deletemenu.component.css']
})
export class DeletemenuComponent implements OnInit{

  Menu: any;
  id: string;
  valid: boolean;
  constructor(private menuService: MenuService) {
    this.valid = true;
  }

  ngOnInit(): void {
    this.menuService.GetMenuById(this.menuService.singleMenuId, (response) => {
      this.Menu = response;
    }); 
  }

  DeleteMenu() {
    if(confirm('Are you sure you want to delete menu')){
      this.menuService.DeleteMenu(this.Menu);
      this.valid = false;
      this.Menu = null;
    }
  }
}
