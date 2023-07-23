import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './user/booking/booking.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
import { AdminComponent } from './admin/admin.component';
import { AdduserComponent } from './admin/user-control/adduser/adduser.component';
import { AddthemeComponent } from './admin/AddTheme/addtheme/addtheme.component';
import { AddmenuComponent } from './admin/AddMenu/addmenu/addmenu.component';
import { AddonComponent } from './admin/AddOn/addon/addon.component';
import { GetuserComponent } from './admin/user-control/getuser/getuser.component';
import { GetThemeComponent } from './admin/AddTheme/get-theme/get-theme.component';
import { GetmenuComponent } from './admin/AddMenu/getmenu/getmenu.component';
import { GetaddonComponent } from './admin/AddOn/getaddon/getaddon.component';
import { EdituserComponent } from './admin/user-control/edituser/edituser.component';
import { EditthemeComponent } from './admin/AddTheme/edittheme/edittheme.component';
import { EditmenuComponent } from './admin/AddMenu/editmenu/editmenu.component';
import { EditaddonComponent } from './admin/AddOn/editaddon/editaddon.component';
import { DeleteuserComponent } from './admin/user-control/deleteuser/deleteuser.component';
import { DeletethemeComponent } from './admin/AddTheme/deletetheme/deletetheme.component';
import { DeletemenuComponent } from './admin/AddMenu/deletemenu/deletemenu.component';
import { DeleteaddonComponent } from './admin/AddOn/deleteaddon/deleteaddon.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { FoodmenuComponent } from './user/booking/foodmenu/foodmenu.component';
import { BookaddonComponent } from './user/booking/bookaddon/bookaddon.component';
import { CartComponent } from './user/cart/cart.component';
import { BookthemeComponent } from './user/booking/booktheme/booktheme.component';
import { ViewmoredetailsComponent } from './user/viewmoredetails/viewmoredetails.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  {
    path: 'user',canActivate: [AuthGuard], component: UserComponent, children: [
      { path: '', redirectTo: 'getAllThemes', pathMatch: 'full' },
      { path: 'getAllThemes', component: HomepageComponent },
      {path:'selecttheme/:id',component:BookthemeComponent},
      { path: 'bookTheme', component: BookingComponent },
      { path: 'getBookedTheme', component: ViewbookingComponent},
      {path:'viewmore',component:ViewmoredetailsComponent},
      {path:'foodmenu',component:FoodmenuComponent},
      {path:'addon',component:BookaddonComponent},
      {path:'cart',component:CartComponent},
    ]
  },
  {
    path: 'admin',canActivate: [AuthGuard], component: AdminComponent, children: [
      { path: 'getUsers',component:GetuserComponent},
      { path: 'addUser',component:AdduserComponent},
      { path: 'editUser/:id',component:EdituserComponent},
      { path: 'deleteUser/:id',component:DeleteuserComponent},
      { path: '', redirectTo: 'getTheme', pathMatch: 'full'},
      { path: 'addTheme', component: AddthemeComponent },
      { path: 'deleteTheme/:id', component: DeletethemeComponent},
      { path: 'editTheme/:id', component: EditthemeComponent},
      { path: 'getTheme', component: GetThemeComponent },
      { path: 'addMenu', component: AddmenuComponent },
      { path: 'deleteMenu/:id', component: DeletemenuComponent},
      { path: 'editMenu/:id', component: EditmenuComponent},
      { path: 'getMenu', component: GetmenuComponent },
      { path: 'addAddon', component: AddonComponent},
      { path: 'deleteAddOn/:id', component: DeleteaddonComponent},
      { path: 'editAddOn/:id', component: EditaddonComponent},
      { path: 'getAddon', component: GetaddonComponent},
      { path: '**', redirectTo: 'getTheme', pathMatch: 'full'},
    ]
  },
  { path: '**', redirectTo: 'user/getAllThemes' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }