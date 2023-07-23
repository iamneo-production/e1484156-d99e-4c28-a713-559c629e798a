import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './user/homepage/homepage.component';
import { BookingComponent } from './user/booking/booking.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { AppService } from './user/app.service';
import { AdduserComponent } from './admin/user-control/adduser/adduser.component';
import { AddthemeComponent } from './admin/AddTheme/addtheme/addtheme.component';
import { AddmenuComponent } from './admin/AddMenu/addmenu/addmenu.component';
import { AddonComponent } from './admin/AddOn/addon/addon.component';
import { AdminComponent } from './admin/admin.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { GetuserComponent } from './admin/user-control/getuser/getuser.component';
import { GetThemeComponent } from './admin/AddTheme/get-theme/get-theme.component';
import { GetmenuComponent } from './admin/AddMenu/getmenu/getmenu.component';
import { GetaddonComponent } from './admin/AddOn/getaddon/getaddon.component';
import { DeleteuserComponent } from './admin/user-control/deleteuser/deleteuser.component';
import { DeletethemeComponent } from './admin/AddTheme/deletetheme/deletetheme.component';
import { DeletemenuComponent } from './admin/AddMenu/deletemenu/deletemenu.component';
import { DeleteaddonComponent } from './admin/AddOn/deleteaddon/deleteaddon.component';
import { EdituserComponent } from './admin/user-control/edituser/edituser.component';
import { EditthemeComponent } from './admin/AddTheme/edittheme/edittheme.component';
import { EditmenuComponent } from './admin/AddMenu/editmenu/editmenu.component';
import { EditaddonComponent } from './admin/AddOn/editaddon/editaddon.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FoodmenuComponent } from './user/booking/foodmenu/foodmenu.component';
import { BookaddonComponent } from './user/booking/bookaddon/bookaddon.component';
import { CartComponent } from './user/cart/cart.component';
import { BookthemeComponent } from './user/booking/booktheme/booktheme.component';
import { ViewmoredetailsComponent } from './user/viewmoredetails/viewmoredetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    BookingComponent,
    ViewbookingComponent,
    UserComponent,
    AuthComponent,
    NavbarComponent,
    AdduserComponent,
    AddthemeComponent,
    AddmenuComponent,
    AddonComponent,
    AdminComponent,
    AdminnavbarComponent,
    GetuserComponent,
    GetThemeComponent,
    GetmenuComponent,
    GetaddonComponent,
    DeleteuserComponent,
    DeletethemeComponent,
    DeletemenuComponent,
    DeleteaddonComponent,
    EdituserComponent,
    EditthemeComponent,
    EditmenuComponent,
    EditaddonComponent,
    FoodmenuComponent,
    BookaddonComponent,
    CartComponent,
    BookthemeComponent,
    ViewmoredetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
