import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './user/cart/cart.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
import { ViewmoredetailsComponent } from './user/viewmoredetails/viewmoredetails.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/user-control/adduser/adduser.component';
import { DeleteuserComponent } from './admin/user-control/deleteuser/deleteuser.component';
import { EdituserComponent } from './admin/user-control/edituser/edituser.component';
import { GetuserComponent } from './admin/user-control/getuser/getuser.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { AddonComponent } from './admin/AddOn/addon/addon.component';
import { DeleteaddonComponent } from './admin/AddOn/deleteaddon/deleteaddon.component';
import { EditaddonComponent } from './admin/AddOn/editaddon/editaddon.component';
import { GetaddonComponent } from './admin/AddOn/getaddon/getaddon.component';

import { UserComponent } from './user/user.component';
import { BookingComponent } from './user/booking/booking.component';
import { BookaddonComponent } from './user/booking/bookaddon/bookaddon.component';
import { BookthemeComponent } from './user/booking/booktheme/booktheme.component';
import { FoodmenuComponent } from './user/booking/foodmenu/foodmenu.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AddthemeComponent } from './admin/AddTheme/addtheme/addtheme.component';
import { DeletethemeComponent } from './admin/AddTheme/deletetheme/deletetheme.component';
import { EditthemeComponent } from './admin/AddTheme/edittheme/edittheme.component';
import { GetThemeComponent } from './admin/AddTheme/get-theme/get-theme.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ViewbookingComponent,
    ViewmoredetailsComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdduserComponent,
    DeleteuserComponent,
    EdituserComponent,
    GetuserComponent,
    AdminnavbarComponent,
    NavbarComponent,
    AddonComponent,
    DeleteaddonComponent,
    EditaddonComponent,
    GetaddonComponent,
    UserComponent,
    BookingComponent,
    BookaddonComponent,
    BookthemeComponent,
    FoodmenuComponent,
    HomepageComponent,
    AdminComponent,
    AddthemeComponent,
    DeletethemeComponent,
    EditthemeComponent,
    GetThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
