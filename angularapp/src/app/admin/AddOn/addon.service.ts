import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

type CallBackFunction = (data: any) => void;

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  AddOnDetails: any;
  singleAddOnDetail:any;
  singleAddOnId:number;
  constructor(private http: HttpClient,private router: Router) { }

  AddAddOn(AddOnDetail: any) {
    (this.http.post('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/addAddOn', AddOnDetail).subscribe(Response => {
      alert("AddOn added successfully");
      this.router.navigateByUrl('admin/getAddon');
    },
    (error:any)=>{
      alert(error.error);
      this.router.navigateByUrl('admin/getAddOn');
    }
    ));
  }
  
  GetAddOn(cb: CallBackFunction) {
    this.http.get('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/getAddOn').subscribe((response) => {
      cb(response);
    });
  }


  GetAddOnById(AddOnId: number, cb: CallBackFunction) {
    this.http.get('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/getAddOn/' + AddOnId).subscribe(
      (response) => {
        cb(response);
      }
    );
  }

  EditAddOn(ActualAddOnDetails: any, EditedAddOnDetails: any) {
    (this.http.put('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/editAddOn/' + ActualAddOnDetails.addOnId,
      {
        "addOnId":ActualAddOnDetails.addOnId,
        "addOnImageURL":EditedAddOnDetails.addOnImageURL,
        "addOnName":EditedAddOnDetails.addOnName,
        "addOnDescription":EditedAddOnDetails.addOnDescription,
        "addOnPrice":EditedAddOnDetails.addOnPrice
      }
    ).subscribe(response => {
      alert("AddOn updated successfully");
      this.router.navigateByUrl('admin/getAddon');
    },
    (error:any)=>{
      alert(error.error);
      this.router.navigateByUrl('admin/getAddon');
    }));
  this.AddOnDetails.splice(this.AddOnDetails.indexOf(ActualAddOnDetails),1,EditedAddOnDetails)
  }

  DeleteAddOn(AddOnDetails: any) {
    this.http.delete('https://8080-cadcffeefefcdaedafbaaabdbddffcfbdfeceb.project.examly.io/admin/deleteAddOn/'+AddOnDetails.addOnId).subscribe(response => {
      alert("AddOn deleted successfully");
      this.router.navigateByUrl('admin/getAddon');
    })
  }
  
}
