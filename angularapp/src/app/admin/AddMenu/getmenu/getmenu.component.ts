import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-getmenu',
  templateUrl: './getmenu.component.html',
  styleUrls: ['./getmenu.component.css']
})
export class GetmenuComponent implements OnInit{

  BookedEventDetails: any = [
  ];
  constructor(private route: Router, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.GetMenu((response) => {
      this.BookedEventDetails = response;
    });
  }
  AddNav() {
    this.route.navigate(['admin/addMenu'])
  }

  EditNav(id: number) {
    this.route.navigate(['admin/editMenu/{' + id + '}']);
    this.menuService.singleMenuId = id;
  }
  DeleteNav(id: number) {
    this.route.navigate(['admin/deleteMenu/{' + id + '}']);
    this.menuService.singleMenuId = id;
  }
}
