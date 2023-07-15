import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  MenuDetails: any =[];
  singleMenuDetail:any=[];
  singleMenuId:number;
  constructor(private http: HttpClient,private router: Router) { }

  AddMenu(MenuDetail: any) {
    (this.http.post('http://localhost:8081/admin/addMenu', MenuDetail).subscribe(Response => {
      alert("Menu added successfully");
      this.router.navigateByUrl('admin/getMenu');
    },
    (error:any)=>{
      alert(error.error);
      this.router.navigateByUrl('admin/getMenu');
    }
    ));
  }

  GetMenu(cb: CallBackFunction) {
    this.http.get('http://localhost:8081/admin/getMenu').subscribe((response) => {
      cb(response);
    });
  }


  GetMenuById(menuId: number, cb: CallBackFunction) {
    this.http.get('http://localhost:8081/admin/getMenu/' + menuId).subscribe(
      (response) => {
        cb(response);
      }
    );
  }

  EditMenu(ActualMenuDetails: any, EditedMenuDetails: any) {
    (this.http.put('http://localhost:8081/admin/editMenu/' + ActualMenuDetails.foodMenuId,
      {
        "foodMenuId":ActualMenuDetails.foodMenuId,
        "foodMenuImageURL":EditedMenuDetails.foodMenuImageURL,
        "foodMenuItems":EditedMenuDetails.foodMenuItems,
        "foodMenuType":EditedMenuDetails.foodMenuType,
        "foodMenuCost":EditedMenuDetails.foodMenuCost
      }
    ).subscribe(response => {
      alert("Menu updated successfully");
      this.router.navigateByUrl('admin/getMenu');
    },
    (error:any)=>{
      alert(error.error);
      this.router.navigateByUrl('admin/getMenu');
    }));
    this.MenuDetails.splice(this.MenuDetails.indexOf(ActualMenuDetails),1,EditedMenuDetails)
  }

  DeleteMenu(MenuDetails: any) {
    this.http.delete('http://localhost:8081/admin/deleteMenu/'+MenuDetails.foodMenuId).subscribe(response => {
      alert("Menu deleted successfully");
      this.router.navigateByUrl('admin/getMenu');
    })
  }
}
