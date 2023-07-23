import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

type CallBackFunction = (data: any) => void;

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  MenuDetails: any =[];
  singleMenuDetail:any=[];
  singleMenuId:number;
  constructor(private http: HttpClient,private router: Router) { }

  AddMenu(MenuDetail: any) {
    (this.http.post('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/addMenu', MenuDetail).subscribe(Response => {
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
    this.http.get('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/getMenu').subscribe((response) => {
      cb(response);
    });
  }


  GetMenuById(menuId: number, cb: CallBackFunction) {
    this.http.get('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/getMenu/' + menuId).subscribe(
      (response) => {
        cb(response);
      }
    );
  }

  EditMenu(ActualMenuDetails: any, EditedMenuDetails: any) {
    (this.http.put('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/editMenu/' + ActualMenuDetails.foodMenuId,
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
    this.http.delete('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/deleteMenu/'+MenuDetails.foodMenuId).subscribe(response => {
      alert("Menu deleted successfully");
      this.router.navigateByUrl('admin/getMenu');
    })
  }
}
