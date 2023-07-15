import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { AddthemeComponent } from './admin/AddTheme/addtheme/addtheme.component';
import { DeletethemeComponent } from './admin/AddTheme/deletetheme/deletetheme.component';
import { EditthemeComponent } from './admin/AddTheme/edittheme/edittheme.component';
import { GetThemeComponent } from './admin/AddTheme/get-theme/get-theme.component';
import { AddmenuComponent } from './admin/AddMenu/addmenu/addmenu.component';
import { DeletemenuComponent } from './admin/AddMenu/deletemenu/deletemenu.component';
import { EditmenuComponent } from './admin/AddMenu/editmenu/editmenu.component';
import { GetmenuComponent } from './admin/AddMenu/getmenu/getmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    HomepageComponent
    AdminComponent,
    AddthemeComponent,
    DeletethemeComponent,
    EditthemeComponent,
    GetThemeComponent,
    AddmenuComponent,
    DeletemenuComponent,
    EditmenuComponent,
    GetmenuComponent
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
